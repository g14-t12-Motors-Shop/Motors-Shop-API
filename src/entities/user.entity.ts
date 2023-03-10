import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Address } from "./address.entity";
import { Vehicle } from "./vehicle.entity";
import { Message } from "./message.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 50 })
  name: string;

  @Column("varchar", { unique: true, length: 127 })
  email: string;

  @Column("varchar", { unique: true, length: 127 })
  cpf: string;

  @Column("varchar", { unique: true, length: 127 })
  phone: string;

  @Column("date")
  birthdate: Date;

  @Column("varchar", { length: 127 })
  description: string;

  @Column("varchar", { length: 127 })
  accountType: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: false })
  isAdm: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, { eager: true, onDelete: "CASCADE" })
  @JoinColumn()
  address: Address;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.owner)
  vehicle: Vehicle[];

  @OneToMany(() => Message, (message) => message.owner)
  message: Message[];
}
