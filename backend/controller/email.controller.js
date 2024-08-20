import { Email } from "../model/Email.model.js";
import { User } from "../model/User.model.js";

const createEmail = async (req, res) => {
  try {
    const userId = req.id;

    const { to, subject, message } = req.body;

    if (!(to || subject || message)) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const email = await Email.create({
      to,
      subject,
      message,
      userId,
    });

    return res
      .status(201)
      .json({ email, message: "Email created successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

const deleteEmail = async (req, res) => {
  try {
    const emailId = req.params.id;

    const userId = req.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ message: "unauthorized", success: false });
    }

    if (!emailId) {
      return res
        .status(400)
        .json({ message: "email id is required", success: false });
    }
    const email = await Email.findByIdAndDelete(emailId);

    if (!email) {
      return res
        .status(404)
        .json({ message: "email not found", success: false });
    }
    return res
      .status(200)
      .json({ message: "Email Deleted Successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

const getAllEmailsById = async (req, res) => {
  try {
    const userId = req.id;

    if (!userId) {
      return res.status(404).json({ message: "id is missing", success: false });
    }

    const emails = await Email.find({ userId });

    return res
      .status(200)
      .json({ emails, message: "Emails fetched successfully", success: true });
  } catch (error) {
    console.log(errors);
  }
};

const getEmailById = async (req, res) => {
  const emailId = req.params.id;
  if (!emailId) {
    return res
      .status(404)
      .json({ message: "Email is required", success: false });
  }

  const email = await Email.findById(emailId);

  if (!email) {
    return res.status(404).json({ message: "Email not found", success: false });
  }

  return res
    .status(200)
    .json({ email, message: "Email fetched successfully", success: true });
};

export { getEmailById, createEmail, deleteEmail, getAllEmailsById };
