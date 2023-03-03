import AppError from "../../errors/appError";
import { AppDataSource } from "../../data-source";
import { IMessageRequest } from "../../interfaces/message";
import { User } from "../../entities/user.entity";
import { Vehicle } from "../../entities/vehicle.entity";
import { Message } from "../../entities/message.entity";

const createMessageService = async (
  { message }: IMessageRequest,
  ownerId: string,
  vehicleId: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const messageRepository = AppDataSource.getRepository(Message);

  const findOwner = await userRepository.findOneBy({ id: ownerId });
  const findVehicle = await vehicleRepository.findOneBy({ id: vehicleId });

  if (!findOwner) {
    throw new AppError("User not found", 401);
  }

  if (!findVehicle) {
    throw new AppError("Vehicle not found", 401);
  }

  const newMessage = messageRepository.create({
    message: message,
    owner: findOwner,
    vehicle: findVehicle,
  });

  await messageRepository.save(newMessage);

  return newMessage;
};

export default createMessageService;
