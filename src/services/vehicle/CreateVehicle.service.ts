import AppError from "../../errors/appError";
import { AppDataSource } from "../../data-source";
import { IVehicleRequest } from "../../interfaces/vehicle/index";
import { User } from "../../entities/user.entity";
import { Vehicle } from "../../entities/vehicle.entity";

const createVehicleService = async (
  { title, price, year, mileage, vehicleType, description }: IVehicleRequest,
  id: string
) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const userRepository = AppDataSource.getRepository(User);

  const owner = await userRepository.findOneBy({ id: id });

  if (!owner) {
    throw new AppError("User does not exist", 404);
  }

  const vehicle = await vehicleRepository.findOne({
    where: { title, price, year, mileage, vehicleType },
  });

  if (vehicle) {
    throw new AppError("Vehicle already exists", 400);
  }

  const newVehicle = vehicleRepository.create({
    title,
    price,
    year,
    mileage,
    vehicleType,
    description,
    owner: owner,
  });

  await vehicleRepository.save(newVehicle);

  return newVehicle;
};

export default createVehicleService;
