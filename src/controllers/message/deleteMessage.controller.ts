import { Request, Response } from "express";
import AppError from "../../errors/appError";
import deleteMessageService from "../../services/messages/deleteMessage.service";

const deleteMessageController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteMessageService(id);

    return res.status(204).send();
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default deleteMessageController;
