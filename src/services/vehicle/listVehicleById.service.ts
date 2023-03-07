import { AppDataSource } from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";
import AppError from "../../errors/appError";

const listVehicleByIdService = async (id: string): Promise<Vehicle> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository.findOne({
    where: {
      id,
    },
    relations: {
      owner: {
        vehicle: true,
      },
    },
  });

  if (!vehicle) {
    throw new AppError("Vehicle not found", 404);
  }

  return vehicle;
};

export default listVehicleByIdService;
