import { User } from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { email, fullName, password } = req.body;

    if (!(email || fullName || password)) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(404)
        .json({ message: "User already exists", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const profilePhoto = `http://avatar.iran.liara.run/public/boy`;

    await User.create({
      email,
      fullName,
      password: hashedPassword,
      profilePhoto,
    });

    return res
      .status(201)
      .json({ message: "User created Successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email || password)) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User does not exist", success: false });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return res
        .status(404)
        .json({ message: "Password incorrect", success: false });
    }

    const userId = user._id;

    const token = await jwt.sign(userId, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    const httpOptions = {
      httpOnly: true,
    };

    return res
      .status(200)
      .cookie("token", token, httpOptions)
      .json({ message: "Logged In Successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

export { register, login };
