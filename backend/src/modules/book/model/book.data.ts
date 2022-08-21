import { ApiProperty } from '@nestjs/swagger';

export class BookData {

    @ApiProperty({ description: 'Book unique ID', example: '36635263' })
    public readonly id: number;

    @ApiProperty({ description: 'Book name', example: 'The great journey' })
    public readonly name: string;

    @ApiProperty({ description: 'Book description', example: 'Lorem Ipsum' })
    public readonly description: string;

    @ApiProperty({ description: 'Book/´s author description', example: '7843' })
    public readonly authorId: number;

}
