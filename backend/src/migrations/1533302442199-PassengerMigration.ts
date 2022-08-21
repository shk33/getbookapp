
import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { TableOptions } from 'typeorm/schema-builder/options/TableOptions';

export class AuthorsMigration1533302442199 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const tableOptions: TableOptions = {
            name: 'authors',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '200'
                }
            ]
        };

        await queryRunner.createTable(
            new Table(tableOptions)
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('authors');
    }

}
