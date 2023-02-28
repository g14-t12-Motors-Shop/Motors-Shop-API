import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import showUserByIdController from "../controllers/users/showUserById.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import getAuthMiddleware from "../middlewares/getAuth.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", getAuthMiddleware, listUsersController);
userRoutes.get("/:id", getAuthMiddleware, showUserByIdController);
userRoutes.patch("", getAuthMiddleware, updateUserController);
userRoutes.delete("", getAuthMiddleware, deleteUserController);

export default userRoutes;