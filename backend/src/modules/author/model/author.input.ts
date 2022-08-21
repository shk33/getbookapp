import { ApiProperty } from '@nestjs/swagger';

export class AuthorInput {

    @ApiProperty()
    public readonly name: string;
}
