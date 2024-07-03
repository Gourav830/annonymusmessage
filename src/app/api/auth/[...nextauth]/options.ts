import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        await dbConnect(); // Connect to the database

        try {
          // Find user by email or username
          const user = await UserModel.findOne({
            $or: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          });

          // Handle cases where user is not found or is not verified
          if (!user) {
            throw new Error("Invalid email or password");
          }
          if (!user.isVerified) {
            throw new Error("Please verify your account");
          }

          // Compare the provided password with the stored hashed password
          const passwordCorrect = await bcrypt.compare(credentials.password, user.password);
          if (passwordCorrect) {
            return user; // Return user if password is correct
          } else {
            throw new Error("Invalid username or password");
          }
        } catch (error: any) {
          throw new Error(error.message); // Throw any errors encountered during authentication
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // If user is authenticated, add necessary fields to JWT token
        token._id = user._id?.toString();
        token.isVerified = user.isVerified;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        // Populate session data from JWT token
        session.user = {
          _id: token._id,
          isVerified: token.isVerified,
          username: token.username,
        };
        console.log("session",session);
        console.log("token =>",token);
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt', // Session strategy using JWT tokens
  },
  secret: process.env.SECRET_KEY_JWT, // JWT secret key
  pages: {
    signIn: "/sign-in", // Page to redirect for sign-in
  },
};
