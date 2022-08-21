import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuthorData } from '.';

@Entity({ name: 'authors' })
export class Author {

    public static readonly NAME_LENGTH = 200;

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ name: 'name', length: Author.NAME_LENGTH })
    public name: string;

    public buildData(): AuthorData {

        return {
            id: this.id,
            name: this.name,
        };
    }

}
