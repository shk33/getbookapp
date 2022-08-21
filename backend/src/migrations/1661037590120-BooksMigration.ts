import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import { TableOptions } from 'typeorm/schema-builder/options/TableOptions';

export class BooksMigration1661037590120 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const tableOptions: TableOptions = {
            name: 'books',
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
                },
                {
                    name: 'description',
                    type: 'text',
                },
                {
                    name: 'authorId',
                    type: 'int',
                }
            ]
        };

        await queryRunner.createTable(
            new Table(tableOptions)
        );

        await queryRunner.createForeignKey(
            "books",
            new TableForeignKey({
                columnNames: ["authorId"],
                referencedColumnNames: ["id"],
                referencedTableName: "authors",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('books');
    }

}
