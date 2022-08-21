import { ApiProperty } from '@nestjs/swagger';
import { Book } from '../../book/model/book.entity';

export class AuthorData {

    @ApiProperty({ description: 'Author unique ID', example: '36635263' })
    public readonly id: number;

    @ApiProperty({ description: 'Author name', example: 'John' })
    public readonly name: string;

    @ApiProperty({ description: 'Author´/s books', example: '[]' })
    public readonly books: Book[];

}
