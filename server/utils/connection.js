import mongoose from "mongoose";

const connectionToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongodb cluster")
  } catch (error) {
    console.error(error)
  }
};

export default connectionToMongo;
