import express from "express";
import {
  createEmail,
  deleteEmail,
  getAllEmailsById,
  getEmailById,
} from "../controller/email.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createEmail);

router.route("/:id").delete(isAuthenticated, deleteEmail);

router.route("/").get(isAuthenticated, getAllEmailsById);

router.route("/:id").get(isAuthenticated, getEmailById);

export default router;
