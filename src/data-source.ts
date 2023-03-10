import { DataSource } from "typeorm";
import "reflect-metadata";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Address } from "./entities/address.entity";
import { Vehicle } from "./entities/vehicle.entity";
import { VehicleImages } from "./entities/vehicleImages.entity";
import { Message } from "./entities/message.entity";
import { initialMigration1678369986710 } from "./migrations/1678369986710-initialMigration";
import { initialMigration1678370019183 } from "./migrations/1678370019183-initialMigration";

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
        migrations: [
          initialMigration1678369986710,
          initialMigration1678370019183,
        ],
      }
);
