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
  createAT: {
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
  isAcceptingMsg: boolean;
  message: Message[];
}

const userSchema: Schema<user> = new Schema({
    username:{type: String,required:[true,"username is required"]},
    email:{type:String,required:true} ,
    password: {type:String,required:true},
    verifyCode: {type:number},
    verifyCodeExp:{type:Date},
    isAcceptingMsg: {type:boolean},
    message:{type:message}
});
