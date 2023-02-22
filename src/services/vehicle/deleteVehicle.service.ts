import { AppDataSource } from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";
import AppError from "../../errors/appError";

const deleteVehicleService = async (id: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const vehicle = await vehicleRepository.findOneBy({ id });

  if (!vehicle) {
    throw new AppError("Vehicle not found", 401);
  }

  await vehicleRepository.delete(id);
};

export default deleteVehicleService;
