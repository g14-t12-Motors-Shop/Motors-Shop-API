import { AppDataSource } from "../../data-source";
import { Message } from "../../entities/message.entity";

const listMessagesByVehicleService = async (id: string) => {
  const messageRepository = AppDataSource.getRepository(Message);

  const messages = await messageRepository.find({
    where: {},
    relations: {
      owner: true,
      vehicle: true,
    },
  });

  const findMessages = messages.filter((message) => message.vehicle.id === id);

  return findMessages;
};

export default listMessagesByVehicleService;
