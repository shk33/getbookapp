import {MigrationInterface, QueryRunner} from "typeorm";
import { Author } from '../modules/author/model/author.entity';

export class seedAuthors1661127947851 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const authors = [
            {
              "id": 1,
              "name": "Antoine de Saint-Exupéry"
            },
            {
              "id": 2,
              "name": "J. R. R. Tolkien"
            },
            {
              "id": 3,
              "name": "Paulo Coelho"
            },
            {
              "id": 4,
              "name": "Jacob and Wilhelm Grimm"
            },
            {
              "id": 5,
              "name": "J. K. Rowling"
            },
            {
              "id": 6,
              "name": "Mikhail Bulgakov"
            },
            {
              "id": 7,
              "name": "Napoleon Hill"
            },
            {
              "id": 8,
              "name": "Lewis Carroll"
            },
            {
              "id": 9,
              "name": "Agatha Christie"
            },
            {
              "id": 10,
              "name": "Cao Xueqin"
            },
            {
              "id": 11,
              "name": "H. Rider Haggard"
            },
            {
              "id": 12,
              "name": "Carlo Collodi"
            },
            {
              "id": 13,
              "name": "Ved Prakash Sharma"
            }
        ];
        
        for (const auth of authors) {
            await queryRunner.manager.save(
                queryRunner.manager.create<Author>(Author, {
                  id: auth.id,
                  name: auth.name
                }),
            );
        }
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE * FROM authors`);
    }

}
