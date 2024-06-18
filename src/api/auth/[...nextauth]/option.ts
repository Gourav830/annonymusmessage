import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModal from "@/model/user";

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
        await dbConnect();
        try {
          const user = await UserModal.findOne({
            $or: [
              { email: credentials.identifier },
              { username: credentials.identifier }
            ]
          });

          if (!user) {
            throw new Error("Invalid email or password");
          }
          if(!user.isVerified){
throw new Error('please Verify Account');
          }
         const PassCorrection =  await bcrypt.compare(user.password ,credentials.password);
if(PassCorrection){
    return user;
}else{
throw new Error("Invalid Username or Password")
}

        } catch (error: any) {
          throw new Error(error.message);
        }
      }
    })
  ]
};
