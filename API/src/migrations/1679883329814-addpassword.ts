import { MigrationInterface, QueryRunner } from "typeorm";

export class addpassword1679883329814 implements MigrationInterface {
    name = 'addpassword1679883329814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "password"`);
    }

}
