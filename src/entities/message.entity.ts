import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { User } from "./user.entity";
import { Vehicle } from "./vehicle.entity";

@Entity("messages")
export class Message {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column("varchar", { length: 500 })
  message: string;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.message, {onDelete: "CASCADE"})
  vehicle: Vehicle;

  @ManyToOne(() => User, (user) => user.message, {onDelete: "CASCADE"})
  owner: User;
}