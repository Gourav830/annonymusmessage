import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

export interface user extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExp: Date;
  isVerified: boolean;

  isAcceptingMsg: boolean;
  messages: Message[];
}

const userSchema: Schema<user> = new Schema({
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
    match: [/.+@.+\..+/, "please use a valid email address"],
  },
  password: { type: String, required: [true, "password is required"] },
  verifyCode: { type: String },

  verifyCodeExp: {
    type: Date,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMsg: { type: Boolean, default: true },
  messages: [MessageSchema],
});

const UserModal =
  (mongoose.models.user as mongoose.Model<user>) ||
  mongoose.model<user>("user", userSchema);
export default UserModal;
