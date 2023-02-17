import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import createVehicleController from "../controllers/vehicle/CreateVehicle.controller";
import getAuthMiddleware from "../middlewares/getAuth.middleware";

const vehicleRoutes = Router();

vehicleRoutes.post("", getAuthMiddleware, createVehicleController);

export default vehicleRoutes;
