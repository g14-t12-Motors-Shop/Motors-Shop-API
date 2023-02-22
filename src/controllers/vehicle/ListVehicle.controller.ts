import { Request, Response } from "express";
import { Vehicle } from "../../entities/vehicle.entity";
import listVehicleService from "../../services/vehicle/listVehicles.service";

const listVehiclesController = async (req: Request, res: Response) => {
  const vehicles: Vehicle[] = await listVehicleService();

  return res.json(vehicles);
};

export default listVehiclesController;
