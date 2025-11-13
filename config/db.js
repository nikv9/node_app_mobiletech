import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mdb:mdb1@cluster0.gxfxlj7.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("db is connected!");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
