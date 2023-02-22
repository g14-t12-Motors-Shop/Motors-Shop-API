import { Request, Response } from "express";
import listVehicleByIdService from "../../services/vehicle/listVehicleById.service";

const listVehicleByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const vehicle = await listVehicleByIdService(id);

  return res.json(vehicle);
};

export default listVehicleByIdController;
