import { ApiProperty } from '@nestjs/swagger';

export class BookInput {

    @ApiProperty()
    public readonly name: string;

    @ApiProperty()
    public readonly description: string;
}
