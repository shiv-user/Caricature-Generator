import mongoose, { Schema, Document } from "mongoose";

export interface ImageUploaded extends Document {
  name: string;
  url: string;
  contentType: string;
  createdAt: Date;
}

const ImageSchema: Schema<ImageUploaded> = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  contentType: { type: String, required: true },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  images: ImageUploaded[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
      "please use a valid email adress",
    ],
  },
  password: { type: String, required: [true, "password is required"] },
  verifyCode: { type: String, required: [true, "verify code is required"] },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "verify code expiry is required"],
    default: Date.now(),
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  images: [ImageSchema],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
