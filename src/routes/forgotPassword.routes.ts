import { Router } from "express";
import forgotPasswordController from "../controllers/users/forgotPassword.controller";

const forgotPasswordRoutes = Router();

forgotPasswordRoutes.patch("", forgotPasswordController);

export default forgotPasswordRoutes;

