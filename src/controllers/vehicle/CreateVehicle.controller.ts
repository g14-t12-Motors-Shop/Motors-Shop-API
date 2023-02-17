import { IVehicleRequest } from "../../interfaces/vehicle/index";
import { Request, Response } from "express";
import createVehicleService from "../../services/vehicle/CreateVehicle.service";

const createVehicleController = async (req: Request, res: Response) => {
  try {
    const { title, price, year, mileage, vehicleType, description, images } =
      req.body;
    const { id } = req.user;

    const newVehicle = await createVehicleService(
      {
        title,
        price,
        year,
        mileage,
        vehicleType,
        description,
        images,
      },
      id
    );

    return res.status(201).json(newVehicle);
  } catch (error) {}
};

export default createVehicleController;
