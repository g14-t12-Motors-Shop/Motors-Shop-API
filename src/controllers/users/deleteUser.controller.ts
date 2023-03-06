import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUser.service";
import AppError, { handleError } from "../../errors/appError";

const deleteUserController =async (req: Request, res: Response) => {
    try {
        const id: string = req.user.id;
        await deleteUserService(id);
        return res.status(204).send()
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
          }
    }
};

export default deleteUserController;