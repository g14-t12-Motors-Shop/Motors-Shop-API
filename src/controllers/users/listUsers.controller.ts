import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listUsersService from "../../services/users/listUsers.service";
import AppError, { handleError } from "../../errors/appError";

const listUsersController = async (req: Request, res: Response) => {
    try {
        const users = await listUsersService();
        return res.json(instanceToPlain(users));
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
          }
    }
};

export default listUsersController;