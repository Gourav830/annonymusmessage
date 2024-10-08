import { resend } from "../lib/resend";
import VerificationEmail from "../../Emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import nodemailer from 'nodemailer';
import { render } from '@react-email/components'
export async function sendVerification(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.SMTP_USER  ,
      pass:process.env.SMTP_PASSWORD,
    },
  });

 

const sendHtm = await render(VerificationEmail({ username, otp: verifyCode }))

  try {
    const emailNode = await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: email, 
      subject: 'Verify anonymous code | anonymous message', 
      html:sendHtm,
    });
  
  console.log("email sent" + emailNode);
    return {success:true,message:' send verification Email'}
  } catch (error) {
    console.log("Error sending verification Email",error);
    return {success:true,message:' send verification Email'}
  }
}
