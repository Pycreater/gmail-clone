import express from "express";
import { connectDB } from "./db/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./route/user.route.js";
import emailRouter from "./route/email.route.js";

dotenv.config({
  path: "./.env",
});
const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://gmail-clone-mu-eight.vercel.app/",
    credentials: true,
  })
);

//routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/email", emailRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log(`server is running on port - ${process.env.PORT}`);
});
