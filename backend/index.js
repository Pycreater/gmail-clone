import express from "express";
import { connectDB } from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const app = express();

await connectDB();

app.listen(process.env.PORT || 8000, () => {
  console.log(`server is running on port - ${process.env.PORT}`);
});
