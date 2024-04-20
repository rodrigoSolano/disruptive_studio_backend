import mongoose from "mongoose";
import { config } from ".";

const connectDatabase = async () => {
  try {
    if (!config.mongoURI) throw new Error("MongoURI is undefined");

    await mongoose.connect(config.mongoURI);
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

export default connectDatabase;
