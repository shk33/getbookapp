import { ApiProperty } from '@nestjs/swagger';
import { Author } from '../../author/model/author.entity';

export class BookData {

    @ApiProperty({ description: 'Book unique ID', example: '36635263' })
    public readonly id: number;

    @ApiProperty({ description: 'Book name', example: 'The great journey' })
    public readonly name: string;

    @ApiProperty({ description: 'Book description', example: 'Lorem Ipsum' })
    public readonly description: string;

    @ApiProperty({ description: 'Book/´s authorid', example: '7843' })
    public readonly authorId: number;

    @ApiProperty({ description: 'Book/´s author info', example: {} })
    public readonly author: Author;

}
