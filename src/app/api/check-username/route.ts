import dbConnect from "@/lib/dbConnect";
import UserModal from "@/model/user";
import { z } from "zod";
import { usernameValidation } from "@/schemas/signupSchema";
// import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";
// import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";

const UserNameQuerySchema = z.object({
  username: usernameValidation,
});

export async function GET(request: Request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);
    const queryParams = { username: searchParams.get("username") };
    //zod validation

    const result = UserNameQuerySchema.safeParse(queryParams);

    if (!result.success) {
      const usernameErrors = result.error.format().username?._errors || [];
      return Response.json(
        {
          success: false,
          message:
            usernameErrors?.length > 0
              ? usernameErrors.join(",")
              : "invalid  query parameters",
        },
        { status: 400 }
      );
    }

    const { username } = result.data;
    const noUsername12 =await UserModal.findOne({ username, isVerified: true });
    if (noUsername12) {
      return Response.json(
        { success: false, message: "username already acquired" },
        { status: 404 }
      );
    }
    return Response.json({success:true,message:'username available'},{status:200});
  } catch (error) {
    console.log("usernaeme error", error);
    return Response.json(
      {
        success: false,
        message: "Error checking username",
      },
      { status: 500 }
    );
  }
}
