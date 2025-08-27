import { connectDB } from "@/lib/connectDB";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/models/user.model";
import { NextResponse } from "next/server";
import Resume from "@/models/resume.model";

export async function POST(req) {
  try {
    await connectDB();
    const { title } = await req.json();
    const secret = process.env.JWT_SECRET;
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "No token provided", success: false },
        { status: 401 }
      );
    }

    let decoded;
    try {
      decoded = jwt.verify(token, secret);
    } catch {
      return NextResponse.json(
        { message: "Invalid or expired token", success: false },
        { status: 403 }
      );
    }

    const existUser = await User.findById(decoded.userId);
    if (!existUser) {
      return NextResponse.json(
        { message: "User not found", success: false },
        { status: 404 }
      );
    }

    const newResume = await Resume.create({ user: existUser._id, title });

    return NextResponse.json(
      {
        message: "Resume Created Successfully",
        resumeId: newResume._id,
        success: true
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("POST /resume error:", error);
    return NextResponse.json(
      { message: "Internal Server Error", success: false },
      { status: 500 }
    );
  }
}
