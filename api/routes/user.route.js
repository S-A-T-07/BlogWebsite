import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  signout,
  test,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import upload from "../utils/multerConfig.js";

const router = express.Router();

router.get("/test", test);
router.put(
  "/update/:userId",
  verifyToken,
  upload.single("profilePicture"),
  updateUser
);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signout);
router.get("/getusers", verifyToken, getUsers);
router.get("/:userId", getUser);

export default router;
