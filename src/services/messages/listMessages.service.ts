import { AppDataSource } from "../../data-source";
import { Message } from "../../entities/message.entity";

const listMessagesService = async () => {
  const messageRepository = AppDataSource.getRepository(Message);
  const messages = await messageRepository.find({
    where: {},
    relations: {
      owner: true,
      vehicle: true,
    },
  });

  return messages;
};

export default listMessagesService;
