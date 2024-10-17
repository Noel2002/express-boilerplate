import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.post("/", createUser);

userRoutes.get("/", getUsers)

export default userRoutes;