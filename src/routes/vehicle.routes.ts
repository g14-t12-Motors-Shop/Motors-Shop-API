import { Router } from "express";
import createVehicleController from "../controllers/vehicle/CreateVehicle.controller";
import listVehiclesByUserController from "../controllers/vehicle/listVehiclesByUser.controller";
import listVehiclesController from "../controllers/vehicle/ListVehicle.controller";
import listVehicleByIdController from "../controllers/vehicle/ListVehicleById.controller";

import getAuthMiddleware from "../middlewares/getAuth.middleware";
import deleteVehicleController from "../controllers/vehicle/deleteVehicle.controller";
import ensureIsOwnerVehicleMiddleware from "../middlewares/ensureIsOwnerVehicle.middleware";

const vehicleRoutes = Router();

vehicleRoutes.post("", getAuthMiddleware, createVehicleController);
vehicleRoutes.get("/user", getAuthMiddleware, listVehiclesByUserController);
vehicleRoutes.get("", listVehiclesController);
vehicleRoutes.get("/:id", listVehicleByIdController);
vehicleRoutes.delete(
  "/:id",
  getAuthMiddleware,
  ensureIsOwnerVehicleMiddleware,
  deleteVehicleController
);

export default vehicleRoutes;
