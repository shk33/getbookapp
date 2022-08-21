import { ApiProperty } from '@nestjs/swagger';

export class AuthorData {

    @ApiProperty({ description: 'Author unique ID', example: '36635263' })
    public readonly id: number;

    @ApiProperty({ description: 'Author name', example: 'John' })
    public readonly name: string;

}
