import { Router } from "express";
import createVehicleController from "../controllers/vehicle/CreateVehicle.controller";
import listVehiclesByUserController from "../controllers/vehicle/listVehiclesByUser.controller";
import getAuthMiddleware from "../middlewares/getAuth.middleware";

const vehicleRoutes = Router();

vehicleRoutes.post("", getAuthMiddleware, createVehicleController);
vehicleRoutes.get("", getAuthMiddleware, listVehiclesByUserController);

export default vehicleRoutes;
