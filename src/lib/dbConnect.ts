import mongoose from "mongoose";
type ConnectionObject = {
  isconnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isconnected) {
    console.log("connected to database");
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/annomousMsg1')
    // const db = await mongoose.connect('mongodb://127.0.0.1:27017/annomousMsg')
    // console.log(db);
    connection.isconnected = db.connections[0].readyState;
    console.log("database connection success");
  } catch (err) {
    console.log("database connection failure", err);
    process.exit(1);
  }
}
export default dbConnect;
