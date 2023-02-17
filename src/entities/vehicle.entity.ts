import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { VehicleImages } from "./vehicleImages.entity";

@Entity()
export class Vehicle {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column("varchar", { length: 50 })
  title: string;

  @Column("decimal", { precision: 8, scale: 2 })
  price: number;

  @Column("int")
  year: number;

  @Column("int")
  mileage: number;

  @Column("varchar", { length: 50 })
  vehicleType: string;

  @Column("varchar", { length: 500 })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  //   owner

  @OneToMany(() => VehicleImages, (VehicleImages) => VehicleImages.vehicle)
  images: VehicleImages;
}
