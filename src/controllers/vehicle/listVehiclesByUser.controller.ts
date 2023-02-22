import { Request, Response } from "express";
import AppError from "../../errors/appError";
import listVehiclesByUserService from "../../services/vehicle/listVehiclesByUser.service";

const listVehiclesByUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    const vehicles = await listVehiclesByUserService(id);

    return res.json(vehicles);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default listVehiclesByUserController;
