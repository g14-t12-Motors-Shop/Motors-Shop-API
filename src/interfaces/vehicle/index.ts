import { User } from "../../entities/user.entity";
import { VehicleImages } from "../../entities/vehicleImages.entity";

export interface IVehicleRequest {
  title: string;
  price: number;
  year: number;
  mileage: number;
  vehicleType: string;
  description: string;
  images: string[];
}

export interface IVehicleUpdateRequest {
  title?: string;
  price?: number;
  year?: number;
  mileage?: number;
  vehicleType?: string;
  description?: string;
  images?: string[];
}
