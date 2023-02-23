import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import AppError from "../errors/appError";

const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.user;
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      vehicle: true,
    },
  });

  if (user) {
    const findVehicle = user.vehicle.find(
      (vehicle) => vehicle.id === req.params.id
    );

    if (!findVehicle) {
      return res.status(401).json({
        message: "User is not owner of this vehicle",
      });
    }
  }

  return next();
};

export default ensureIsOwnerMiddleware;
