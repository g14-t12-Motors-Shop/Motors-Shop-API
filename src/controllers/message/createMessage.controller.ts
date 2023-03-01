import { Request, Response } from "express";
import createMessageService from "../../services/messages/createMessage.service";
import { IMessageRequest } from "../../interfaces/message";
import AppError from "../../errors/appError";

const createMessageController = async (req: Request, res: Response) => {
  try {
    const message: IMessageRequest = req.body;
    const ownerId: string = req.user.id;
    const vehicleId: string = req.params.id;

    const createdMessage = await createMessageService(
      message,
      ownerId,
      vehicleId
    );

    return res.status(201).json(createdMessage);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default createMessageController;
