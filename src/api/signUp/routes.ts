import dbConnect from "@/lib/dbConnect";
import UserModal from "@/model/user";
import bcrypt from 'bcryptjs'
import { sendVerification } from "@/helpers/sendVerificationEmail";
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

const VerifyCode = Math.floor(100000+Math.random()*80000).toString()
const existingUserEmail = await UserModal.findOne({email})
if(existingUserEmail){
if(existingUserEmail.isVerified){
    return Response.json({
        success:false,
        message:"User Alredy exists",
          },{status:400})
}else{
    const hashedPass = await bcrypt.hash(password,12)
    existingUserEmail.password = hashedPass;
    existingUserEmail.verifyCode = VerifyCode;
existingUserEmail.verifyCodeExp = new Date(Date.now()+3600000)
await existingUserEmail.save()

}
}else{
const hashedPass = await bcrypt.hash(password,12)
const expiryDate = new Date()
expiryDate.setHours(expiryDate.getHours()+ 1)
const newUser = new UserModal({
    username,
    email,
    password:hashedPass,
    VerifyCode,
    verifyCodeExp: expiryDate,
    isVerified:false,

    isAcceptingMsg: true,
    messages: []

})
await newUser.save();
}
//verification
const emailResponse = await sendVerification(email,username,VerifyCode)
if(!emailResponse.success){
  return Response.json({
success:false,
message:emailResponse.message,
  },{status:500})
}
return Response.json({
    success:true,
    message:"userRegistered Successfully"
      },{status:201})
}
catch (error) {
            console.log("Error registering user ",error)
            return Response.json({
                success:false,
                message:'Error regestring user'
            },
        {status:500})
    }

}