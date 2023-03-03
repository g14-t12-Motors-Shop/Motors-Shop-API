import { Request, Response } from "express";
import listMessagesService from "../../services/messages/listMessages.service";

const listMessagesController = async (req: Request, res: Response) => {
  const messages = await listMessagesService();

  return res.json(messages);
};

export default listMessagesController;
