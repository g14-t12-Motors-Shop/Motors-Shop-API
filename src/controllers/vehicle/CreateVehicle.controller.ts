import { IVehicleRequest } from "./../../interfaces/vehicle/index";
import { Request, Response } from "express";
import CreateVehicleService from "../../services/vehicle/CreateVehicle.service";

const CreateVehicleController = async (req: Request, res: Response) => {
  try {
    const { title, price, year, mileage, vehicleType, description, images } =
      req.body;
    const owner = req.headers.authorization;

    const newVehicle = await CreateVehicleService({
      title,
      price,
      year,
      mileage,
      vehicleType,
      description,
      owner,
      images,
    });

    return res.status(201).json(newVehicle);
  } catch (error) {}
};
