import { Request, Response } from "express";
import AppError, { handleError } from "../../errors/appError";
import { IUserForgotPassword } from "../../interfaces/user";
import forgotPasswordService from "../../services/users/forgotPassword.service";

const forgotPasswordController = async (req: Request, res: Response) => {
    try {
        const data: IUserForgotPassword = req.body;
        await forgotPasswordService(data);
        return res.status(204).send();

    } catch (error){
        if (error instanceof AppError) {
            handleError(error, res)
        }
    }
    
};

export default forgotPasswordController;