import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    profilePic: {
      type: String,
      default: "",
    },
    credits: {
      type: Number,
      default: 3,
    },
  },
  { timestamps: true }
);


export default mongoose.models.User || mongoose.model("User", UserSchema);
