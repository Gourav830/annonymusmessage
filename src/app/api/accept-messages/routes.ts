import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModal from "@/model/user";
import { User } from "next-auth";
import { NextRequest } from "next/server";

export async function POST(request: Request) {
  await dbConnect();
  const session = await getServerSession(authOptions);
  const user: User = session?.user;
  if (!session || !user) {
    return Response.json(
      { success: false, message: "not Authenticated" },
      { status: 401 }
    );
  }
  const userId = user._id;

  const { acceptMessages } = await request.json();
  try {
    const updatedUser = await UserModal.findByIdAndUpdate(
      userId,
      { isAcceptingMsg: acceptMessages },
      { new: true }
    );
    if (!updatedUser) {
      return Response.json(
        { success: false, message: "failed to accept messages" },
        { status: 401 }
      );
    }
    return Response.json(
      {
        success: true,
        message: "Message acceptence Status Updated success",
        updatedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { success: false, message: "failed to accept messages" },
      { status: 500 }
    );
  }
}
export async function GET(request: Request) {
  await dbConnect();
  const session = await getServerSession(authOptions);
  const user: User = session?.user;
  if (!session || !user) {
    return Response.json(
      { success: false, message: "not Authenticated" },
      { status: 401 }
    );
  }
  const userId = user._id;
  try {
    const foundUser = await UserModal.findById(userId);
    if (!foundUser) {
      return Response.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }
    return Response.json(
      { success: true, isAccceptingMessages: foundUser.isAcceptingMsg },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { success: false, message: "failed to fetch - Error " },
      { status: 500 }
    );
  }
}

