import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import showUserByIdService from "../../services/users/showUserById.service";
import AppError, { handleError } from "../../errors/appError";

const showUserByIdController = async (req: Request, res: Response) => {
  try {
    const userIdFound = req.user.id;
    const userFound = await showUserByIdService(userIdFound);
    return res.json(instanceToPlain(userFound));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default showUserByIdController;
