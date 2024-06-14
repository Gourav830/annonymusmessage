import dbConnect from "@/lib/dbConnect";
import UserModal from "@/model/user";
import bcrypt from'bcryptjs"
import { sendVerification } from "@/helpers/sendVerificationEmail";
import { usernameValidation } from '../../schemas/signupSchema';
import VerificationEmail from '../../../Emails/VerificationEmail';
export async function POST(request:Request) {
    await dbConnect()
    try {
        const {username,email,password}= await request.json()

const existingUserVerified =await UserModal.findOne({
    username,isVerified:true
})
if(existingUserVerified){
    return Response.json({success:false,message:'username already taken'},{status:400})
}

const VerifyCode = Math.floor(10000+Math.random()*80000)
const existingUserEmail = await UserModal.findOne({email})
if(existingUserEmail){

}else{
const hashedPass = await bcrypt.hash(password,12)
const expiryDate = new Date()
expiryDate.setHours(expiryDate.getHours()+ 1)
new UserModal({
    username;
    email;
    password:hashedPass;
    verifyCode: string;
    verifyCodeExp: Date;
    isVerified: boolean;

    isAcceptingMsg: boolean;
    messages: Message[];

})
}

    } catch (error) {
            console.log("Error registering user ",error)
            return Response.json({
                success:false,
                message:'Error regestring user'
            },
        {status:500})
    }

}