import AppError from "../../errors/appError";
import { AppDataSource } from "../../data-source";
import { IVehicleUpdateRequest } from "../../interfaces/vehicle";
import { Vehicle } from "../../entities/vehicle.entity";
import { VehicleImages } from "../../entities/vehicleImages.entity";

const updateVehicleService = async (
  {
    title,
    price,
    year,
    mileage,
    vehicleType,
    description,
    images,
  }: IVehicleUpdateRequest,
  id: string
) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const vehicleImageRepository = AppDataSource.getRepository(VehicleImages);

  const findVehicle = await vehicleRepository.findOneBy({ id });

  if (!findVehicle) {
    throw new AppError("Vehicle not found", 401);
  }

  if (images) {
    findVehicle.images!.map(async (image) => {
      await vehicleImageRepository.delete(image.id);
    });

    const newVehicleImages: VehicleImages[] = [];

    images.map((image) => {
      if (image !== "") {
        const item = vehicleImageRepository.create({
          imageUrl: image,
          vehicle: findVehicle,
        });
        newVehicleImages.push(item);
      }
    });

    await vehicleImageRepository.save(newVehicleImages);
  }

  await vehicleRepository.update(id, {
    title: title ? title : findVehicle.title,
    price: price ? price : findVehicle.price,
    year: year ? year : findVehicle.year,
    mileage: mileage ? mileage : findVehicle.mileage,
    vehicleType: vehicleType ? vehicleType : findVehicle.vehicleType,
    description: description ? description : findVehicle.description,
  });

  const vehicle = await vehicleRepository.findOneBy({ id });

  return vehicle!;
};

export default updateVehicleService;
