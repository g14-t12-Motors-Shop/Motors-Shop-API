import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/user";
import loginUserService from "../../services/users/loginUser.service";
import AppError, { handleError } from "../../errors/appError";

const loginUserController = async (req: Request, res: Response) => {
  try {
    const data: IUserLogin = req.body;
    const token = await loginUserService(data);
    return res.json({ token });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default loginUserController;
