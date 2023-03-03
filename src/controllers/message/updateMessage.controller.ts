import { Request, Response } from "express";
import AppError from "../../errors/appError";
import { IMessageUpdateRequest } from "../../interfaces/message";
import updateMessageService from "../../services/messages/updateMessage.service";

const updateMessageController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const message: IMessageUpdateRequest = req.body;
    const updatedMessage = await updateMessageService(message, id);

    return res.json(updatedMessage);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default updateMessageController;
