import { Vehicle } from "../../entities/vehicle.entity";
import { AppDataSource } from "./../../data-source";
import { IVehicleRequest } from "./../../interfaces/vehicle/index";
// import {AppError} from "../../errors/appError"

const CreateVehicleService = async ({
  title,
  price,
  year,
  mileage,
  vehicleType,
  description,
  owner,
}: IVehicleRequest) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository.findOne({
    where: { title, price, year, mileage, vehicleType },
  });

  //   if(vehicle) {
  //     throw new AppError(400, "Vehicle already exists")
  //   }

  const newVehicle = new Vehicle();
  newVehicle.title = title;
  newVehicle.price = price;
  newVehicle.year = year;
  newVehicle.mileage = mileage;
  newVehicle.vehicleType = vehicleType;
  newVehicle.description = description;
  vehicleRepository.create(newVehicle);

  await vehicleRepository.save(newVehicle, (owner = owner));
};

export default CreateVehicleService;
