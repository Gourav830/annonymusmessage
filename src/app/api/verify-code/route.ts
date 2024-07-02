import dbConnect from "@/lib/dbConnect";
import UserModal from "@/model/user";
// import { z } from "zod";
import { user, Message } from "../../../model/user";
import { messageSchema } from "@/schemas/messageSchema";
export async function POST(request: Request) {
  await dbConnect();
  try {
    const { username, code } = await request.json();
    const decodedUsername = decodeURIComponent(username);
    const user = await UserModal.findOne({ username: decodedUsername });
    // console.log(user.verifyCode);
    if (!user) {
      return Response.json(
        { success: false, message: "Error verifying User" },
        { status: 404 }
      );
    }
    console.log(user.verifyCode);

    const valideCode = user.verifyCode === code;
    console.log(user.verifyCode);
    const isCodeExpired = new Date(user.verifyCodeExp) > new Date();
    if (valideCode && isCodeExpired) {
      user.isVerified = true;
      await user.save();
      return Response.json(
        { success: true, message: "account Verified successfully" },
        { status: 200 }
      );
    } else if (!valideCode) {
      return Response.json(
        { success: false, message: "not a valid code" },
        { status: 400 }
      );
    } else if (!isCodeExpired) {
        return Response.json(
            { success: false, message: "verification time expired" },
            { status: 400 }
          );    }
  } catch (error) {
    console.log("Error Verifying User", error);
    return Response.json(
      {
        success: false,
        message: "Error verification of user",
      },
      { status: 500 }
    );
  }
}
