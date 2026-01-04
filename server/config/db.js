import mongoose from "mongoose";

const connectDB = async () => {
  try {
    let mongoURI;

    if (process.env.NODE_ENV === "production") {
      // Production MUST use Atlas
      mongoURI = process.env.MONGO_URI;

      if (!mongoURI) {
        throw new Error("MONGO_URI is not defined in production");
      }
    } else {
      // Local development
      mongoURI = "mongodb://127.0.0.1:27017/portfolio";
    }

    const conn = await mongoose.connect(mongoURI);

    console.log(
      `MongoDB Connected (${process.env.NODE_ENV}): ${conn.connection.host}`
    );
  } catch (error) {
    console.error("Mongo connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
