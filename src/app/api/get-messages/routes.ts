import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModal from "@/model/user";
import { User } from "next-auth";

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

}