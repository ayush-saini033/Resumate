import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import User from "@/models/user.model";
import { connectDB } from "@/lib/connectDB";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    await connectDB();
    const secret = process.env.JWT_SECRET;
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const decoded = jwt.verify(token, secret);

    const existUser = await User.findById(decoded.userId);

    if (existUser) {
      return NextResponse.json({
        message: `Welcome back ${existUser.name}`,
        success: true,
      });
    } else {
      return NextResponse.json({
        message: "User not found",
        success: "false",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "" });
  }
}
