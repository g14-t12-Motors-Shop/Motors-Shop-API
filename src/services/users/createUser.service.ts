import { User } from "../../entities/user.entity";
import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { IUserRequest } from "../../interfaces/user";
import AppError from "../../errors/appError";
import { Address } from "../../entities/address.entity";
import { IAddressRequest } from "../../interfaces/address";

const createUserService = async ({
  name,
  email,
  cpf,
  phone,
  birthdate,
  description,
  accountType,
  password,
  isAdm,
  address,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);
  const cpfAlreadyExists = users.find((user) => user.cpf === cpf);
  const phoneAlreadyExists = users.find((user) => user.phone === phone);

  if (emailAlreadyExists) {
    throw new AppError("email already exists!", 401);
  }

  if (!password) {
    throw new AppError("Password is missing!", 401);
  }

  if (cpfAlreadyExists) {
    throw new AppError("cpf already exists!", 401);
  }

  if (phoneAlreadyExists) {
    throw new AppError("phone already exists!", 401);
  }

  const newAddressObject: IAddressRequest = {
    state: address.state,
    city: address.city,
    street: address.street,
    zipCode: address.zipCode,
    number: address.number,
    complement: address.complement,
  };

  const newAddress = await addressRepository.save(newAddressObject);

  const hashedPassword = await hash(password, 10);
  const user = userRepository.create({
    name,
    email,
    cpf,
    phone,
    birthdate,
    description,
    accountType,
    password: hashedPassword,
    isAdm,
    address: newAddress,
  });

  await userRepository.save(user);

  return user;
};

export default createUserService;
