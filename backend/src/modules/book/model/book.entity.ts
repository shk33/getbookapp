import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { BookData } from '.';
import { Author } from '../../author/model/author.entity';

@Entity({ name: 'books' })
export class Book {

    public static readonly NAME_LENGTH = 200;

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ name: 'name', length: Book.NAME_LENGTH })
    public name: string;

    @Column({ name: 'description', nullable: false })
    public description: string;

    @Column({ name: 'authorId', nullable: false })
    public authorId: number;

    @ManyToOne(() => Author, (author) => author.books)
    public author: Author

    public buildData(): BookData {

        return {
            id: this.id,
            name: this.name,
            description: this.description,
            authorId: this.authorId,
            author: this.author
        };
    }

}
