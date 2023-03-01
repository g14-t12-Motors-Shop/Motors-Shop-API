import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Message } from "../entities/message.entity";

const ensureIsOwnerMessageMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const messageRepository = AppDataSource.getRepository(Message);

  const findMessage = await messageRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      owner: true,
    },
  });

  if (findMessage) {
    if (findMessage.owner.id !== req.user.id) {
      return res.status(401).json({
        message: "User is not owner of this vehicle",
      });
    }
  }

  return next();
};

export default ensureIsOwnerMessageMiddleware;
