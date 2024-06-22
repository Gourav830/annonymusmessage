import { resend } from "../lib/resend";
import VerificationEmail from "../../Emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
export async function sendVerification(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
from:'onboarding@resend.dev',
to:email,
subject:'Verify anonymous code | anonymous message',
react:VerificationEmail({username,otp:verifyCode}),
    })

    return {success:true,message:' send verification Email'}
  } catch (error) {
    console.log("Error sending verification Email",error);
    return {success:true,message:' send verification Email'}
  }
}
