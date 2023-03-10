import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";

const showUserByIdService = async (id: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const userFound = await userRepository.findOne({
    where: {
      id,
    },
    relations: {
        address: true,
        vehicle: true,
    }
  });

  if (!userFound) {
    throw new AppError("User not found!");
  }

  return userFound;
};

export default showUserByIdService;
