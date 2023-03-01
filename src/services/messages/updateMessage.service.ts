import { AppDataSource } from "../../data-source";
import { Message } from "../../entities/message.entity";
import { IMessageUpdateRequest } from "../../interfaces/message";
import AppError from "../../errors/appError";

const updateMessageService = async (
  { message }: IMessageUpdateRequest,
  id: string
) => {
  const messageRepository = AppDataSource.getRepository(Message);

  const findMessage = await messageRepository.findOneBy({ id });

  if (!findMessage) {
    throw new AppError("Message not found", 491);
  }

  await messageRepository.update(id, {
    message: message ? message : findMessage.message,
  });

  const updatedMessage = await messageRepository.findOneBy({ id });

  return updatedMessage;
};

export default updateMessageService;
