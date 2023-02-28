import { AppDataSource } from "../../data-source";
import { Message } from "../../entities/message.entity";
import AppError from "../../errors/appError";

const deleteMessageService = async (id: string) => {
  const messageRepository = AppDataSource.getRepository(Message);
  const findMessage = await messageRepository.findOneBy({ id });

  if (!findMessage) {
    throw new AppError("Message not found", 401);
  }

  await messageRepository.delete(id);
};

export default deleteMessageService;
