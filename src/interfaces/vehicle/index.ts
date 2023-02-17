import { VehicleImages } from "../../entities/vehicleImages.entity";

export interface IVehicleRequest {
  title: string;
  price: number;
  year: number;
  mileage: number;
  vehicleType: string;
  description: string;
  owner: User;
  images: VehicleImages;
}
