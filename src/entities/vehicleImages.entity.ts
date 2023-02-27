import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vehicle } from "./vehicle.entity";

@Entity("vehicle_images")
export class VehicleImages {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column("varchar")
  imageUrl: string;

  @ManyToOne(() => Vehicle, (Vehicle) => Vehicle.images, {onDelete: "CASCADE"})
  vehicle: Vehicle;
}
