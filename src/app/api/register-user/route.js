import { connectDB } from "@/lib/connectDB";
import User from "@/models/user.model";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    await connectDB();

    const { name, email, profilePic } = await request.json();

    let user = await User.findOne({ email });

    // If user doesn't exist, create one
    if (!user) {
      user = await User.create({
        name,
        email,
        profilePic,
        credits: 3,
      });
    }

    // Generate JWT token for either new or existing user
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    const response = NextResponse.json(
      {
        message: user.isNew
          ? "User registered successfully"
          : "User logged in successfully",
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        success: true,
      },
      { status: user.isNew ? 201 : 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 2 * 24 * 60 * 60, // 2 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Register/Login Error:", error.message);
    return NextResponse.json(
      { message: "Failed to process request", success: false },
      { status: 500 }
    );
  }
}
