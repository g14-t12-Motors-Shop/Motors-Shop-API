import { Request, Response } from "express";
import listMessagesByVehicleService from "../../services/messages/listMessagesByVehicle.service";

const listMessagesByVehicleController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const messages = await listMessagesByVehicleService(id);

  return res.json(messages);
};

export default listMessagesByVehicleController;
