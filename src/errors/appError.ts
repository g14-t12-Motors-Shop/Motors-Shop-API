import { Request, Response, NextFunction } from "express"

class AppError extends Error {
    statusCode: number
    constructor(message: string, statusCode: number = 400) {
        super()
        this.message = message
        this.statusCode = statusCode
    }
}

export const handleError = (err: AppError, res: Response) => {
    const { statusCode, message } = err;
    return res.status(statusCode).json({
      status: "error",
      statusCode,
      message,
    });
  };

export default AppError