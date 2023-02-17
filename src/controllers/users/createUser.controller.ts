import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import createUserService from "../../services/users/createUser.service";
import { IUserRequest } from "../../interfaces/user";
import AppError, { handleError } from "../../errors/appError";

const createUserController = async (req: Request, res: Response) => {
    
    const user: IUserRequest = req.body;
    try {
        const createdUser = await createUserService(user)
        return res.status(201).json(instanceToPlain(createdUser))

    } catch(error) {
        if (error instanceof AppError) {
            handleError(error, res)
        }
    }
   
};

export default createUserController;