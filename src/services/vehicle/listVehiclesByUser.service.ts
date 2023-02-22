import AppError from "../../errors/appError";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const listVehiclesByUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      vehicle: true,
    },
  });

  if (!user) {
    throw new AppError("Vehicles not found!", 401);
  }

  return user.vehicle!;
};

export default listVehiclesByUserService;
