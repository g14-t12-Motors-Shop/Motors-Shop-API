import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Vehicle } from "./vehicle.entity";

@Entity()
export class VehicleImages {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column("varchar")
  imageUrl: string;

  @ManyToOne(() => Vehicle, (Vehicle) => Vehicle.images)
  vehicle: Vehicle;
}
