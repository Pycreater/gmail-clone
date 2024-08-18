import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.info(
      "🌏 Mongodb Connecting successfully host : " +
        connectionInstance.connection.host
    );
  } catch (error) {
    console.log(`Failed while connecting mongo DB.`);
  }
};

export { connectDB };
