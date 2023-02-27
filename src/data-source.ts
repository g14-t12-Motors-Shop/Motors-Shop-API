import { DataSource } from "typeorm";
import "reflect-metadata";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Address } from "./entities/address.entity";
import { Vehicle } from "./entities/vehicle.entity";
import { VehicleImages } from "./entities/vehicleImages.entity";
import { initialMigration1677078053932 } from "./migrations/1677078053932-initialMigration";
import { fourthMigration1677502759894 } from "./migrations/1677502759894-fourthMigration";
import { fifthMigration1677505051919 } from "./migrations/1677505051919-fifthMigration";

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
        entities: [User, Address, Vehicle, VehicleImages],
        migrations: [initialMigration1677078053932, fourthMigration1677502759894, fifthMigration1677505051919],
      }
);
