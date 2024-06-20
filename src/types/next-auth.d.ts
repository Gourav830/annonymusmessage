import "next-auth";
import { usernameValidation } from "../schemas/signupSchema";

declare module "next-auth" {
  interface User {
    _id?: string;
    isVerified?: boolean;
    isAcceptingMessages?: boolean;
    username?:string}
    interface session{
        user:{ _id?: string;
            isVerified?: boolean;
            isAcceptingMessages?: boolean;
            username?:string}&DefaultSession['user']

    }
    interface jwt{
        user:{ _id?: string;
            isVerified?: boolean;
            isAcceptingMessages?: boolean;
            username?:string}
    }
}
