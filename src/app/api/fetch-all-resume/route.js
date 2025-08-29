import { connectDB } from "@/lib/connectDB";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import User from "@/models/user.model";
import jwt from "jsonwebtoken";
import Resume from "@/models/resume.model";

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

    const AllResumes = await Resume.find(
      { user: existUser._id },
      "firstName lastName title jobTitle"
    );


    return NextResponse.json(
      {
        message: "All resume fetched successfully",
        data: AllResumes,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal server error",
      success: false,
    });
  }
}
