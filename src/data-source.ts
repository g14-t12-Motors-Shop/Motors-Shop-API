import { DataSource } from "typeorm";
import "reflect-metadata";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Address } from "./entities/address.entity";
import { Vehicle } from "./entities/vehicle.entity";
import { VehicleImages } from "./entities/vehicleImages.entity";
import { Message } from "./entities/message.entity";
import { initialMigration1677511688851 } from "./migrations/1677511688851-initialMigration";
import { initialMigration1677511807996 } from "./migrations/1677511807996-initialMigration";

export const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/*.ts"],
        synchronize: true,
      }
    : {
        type: "postgres",
        host: process.env.HOST,
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: [User, Address, Vehicle, VehicleImages, Message],
        migrations: [initialMigration1677511688851, initialMigration1677511807996],
      }
);
