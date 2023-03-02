import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1677677089859 implements MigrationInterface {
    name = 'initial1677677089859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "messages" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "message" character varying(500) NOT NULL, "vehicleId" uuid, "ownerId" uuid, CONSTRAINT "PK_18325f38ae6de43878487eff986" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_a16670db08f583ecf40e6fd507e" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_cf803e7bc9c4823b6ab03de6c13" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_cf803e7bc9c4823b6ab03de6c13"`);
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_a16670db08f583ecf40e6fd507e"`);
        await queryRunner.query(`DROP TABLE "messages"`);
    }

}
