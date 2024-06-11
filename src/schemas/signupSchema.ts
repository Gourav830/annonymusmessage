import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(5, "username must be 5 letters")
  .max(20, "username should not be more than 20 characters")
  .regex(
    /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/,
    "username must not contain special chatacters"
  );

export const signupSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email Address" }),
  password:z.string().min(6,{message:"password must be at least 6 characters"})
});
