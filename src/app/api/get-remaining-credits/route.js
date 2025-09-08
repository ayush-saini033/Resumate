import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/connectDB";
import User from "@/models/user.model";

export async function GET(req) {
  try {
    await connectDB();

    const secret = process.env.JWT_SECRET;
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "No token provided", success: false },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, secret);

    const user = await User.findById(decoded.userId).select("credits");

    if (!user) {
      return NextResponse.json(
        { message: "User not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Credits fetched successfully",
        success: true,
        credits: user.credits || 0,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching credits:", error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
}
