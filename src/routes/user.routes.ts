import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import showUserByIdController from "../controllers/users/showUserById.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import getAuthMiddleware from "../middlewares/getAuth.middleware";
import validationBodyPatchMiddleware from "../middlewares/validationBodyPatch.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", getAuthMiddleware, listUsersController);
userRoutes.get("/profile", getAuthMiddleware, showUserByIdController);
userRoutes.patch("", getAuthMiddleware, validationBodyPatchMiddleware, updateUserController);
userRoutes.delete("", getAuthMiddleware, deleteUserController);

export default userRoutes;
