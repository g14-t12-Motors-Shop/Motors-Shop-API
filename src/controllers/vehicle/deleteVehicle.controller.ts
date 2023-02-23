import { Request, Response } from "express";
import AppError from "../../errors/appError";
import deleteVehicleService from "../../services/vehicle/deleteVehicle.service";

const deleteVehicleController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteVehicleService(id);

    return res.status(204).send();
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default deleteVehicleController;
