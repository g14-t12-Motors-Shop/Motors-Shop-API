import { MigrationInterface, QueryRunner } from "typeorm";

export class thirdMigration1677252151729 implements MigrationInterface {
    name = 'thirdMigration1677252151729'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "price" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "price" numeric(8,2) NOT NULL`);
    }

}
