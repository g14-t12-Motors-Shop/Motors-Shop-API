import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/user";
import loginUserService from "../../services/users/loginUser.service";

const loginUserController = async (req: Request, res: Response) => {
  const data: IUserLogin = req.body;
  const token = await loginUserService(data);
  return res.json({ token });
};

export default loginUserController;
