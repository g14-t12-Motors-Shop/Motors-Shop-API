import { Router } from "express";
import createMessageController from "../controllers/message/createMessage.controller";
import deleteMessageController from "../controllers/message/deleteMessage.controller";
import listMessagesController from "../controllers/message/listMessages.controller";
import updateMessageController from "../controllers/message/updateMessage.controller";
import ensureIsOwnerMessageMiddleware from "../middlewares/ensureIsOwnerMessage.middleware";
import getAuthMiddleware from "../middlewares/getAuth.middleware";

const messageRoutes = Router();

messageRoutes.post("/:id", getAuthMiddleware, createMessageController);
messageRoutes.get("", listMessagesController);
messageRoutes.patch(
  "/:id",
  getAuthMiddleware,
  ensureIsOwnerMessageMiddleware,
  updateMessageController
);
messageRoutes.delete(
  "/:id",
  getAuthMiddleware,
  ensureIsOwnerMessageMiddleware,
  deleteMessageController
);

export default messageRoutes;
