import { IVehicleUpdateRequest } from "../../interfaces/vehicle";
import { Request, Response } from "express";
import updateVehicleService from "../../services/vehicle/updateVehicle.service";
import AppError from "../../errors/appError";

const updateVehicleController = async (req: Request, res: Response) => {
  try {
    const { title, price, year, mileage, vehicleType, description, images } =
      req.body;

    const { id } = req.params;

    const updatedVehicle = await updateVehicleService(
      { title, price, year, mileage, vehicleType, description, images },
      id
    );

    return res.status(201).json(updatedVehicle);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default updateVehicleController;
