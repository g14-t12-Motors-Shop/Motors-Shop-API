import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import createVehicleController from "../controllers/vehicle/CreateVehicle.controller";
import listVehiclesController from "../controllers/vehicle/ListVehicle.controller";
import listVehicleByIdController from "../controllers/vehicle/ListVehicleById.controller";
import getAuthMiddleware from "../middlewares/getAuth.middleware";

const vehicleRoutes = Router();

vehicleRoutes.post("", getAuthMiddleware, createVehicleController);
vehicleRoutes.get("", listVehiclesController);
vehicleRoutes.get("/:id", listVehicleByIdController);

export default vehicleRoutes;
