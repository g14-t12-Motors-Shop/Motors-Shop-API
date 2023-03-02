import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";
import { compare, compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { IUserLogin } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";

const loginUserService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Wrong email/password", 403);
  }

  const passwordMatch = compareSync(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Wrong email/password", 403);
  }
  const token = jwt.sign(
    { isAdm: user.isAdm },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "1d",
      subject: user.id,
    }
  );
  return token;
};

export default loginUserService;
