import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import updateUSerService from "../../services/users/updateUser.service";
import AppError, { handleError } from "../../errors/appError";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const id: string = req.user.id;
    const updatedUser = await updateUSerService(user, id);
    return res.json(instanceToPlain(updatedUser));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default updateUserController;
