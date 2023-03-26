import express from "express";
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"

import { registerUser } from "../controllers/user-controller";

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)

export {router as userRoutes}