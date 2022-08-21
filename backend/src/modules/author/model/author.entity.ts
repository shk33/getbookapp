import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AuthorData } from '.';
import { Book } from '../../book/model/book.entity';

@Entity({ name: 'authors' })
export class Author {

    public static readonly NAME_LENGTH = 200;

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ name: 'name', length: Author.NAME_LENGTH })
    public name: string;

    @OneToMany(() => Book, (book) => book.author)
    books: Book[]

    public buildData(): AuthorData {

        return {
            id: this.id,
            name: this.name,
            books: this.books || [],
        };
    }
}
