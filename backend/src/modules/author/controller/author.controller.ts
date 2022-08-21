import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '../../common';

import { AuthorPipe } from '../flow';
import { AuthorData, AuthorInput } from '../model';
import { AuthorService } from '../service';

@Controller('authors')
@ApiTags('author')
@ApiBearerAuth()
export class AuthorController {

    public constructor(
        private readonly logger: LoggerService,
        private readonly authorService: AuthorService
    ) { }

    @Get()
    @ApiResponse({ status: HttpStatus.OK, isArray: true, type: AuthorData })
    public async find(): Promise<AuthorData[]> {

        const authors = await this.authorService.findWithBooks();

        return authors.map(author => author.buildData());
    }

    @Post()
    // @UseGuards(RestrictedGuard)
    @ApiResponse({ status: HttpStatus.CREATED, type: AuthorData })
    public async create(@Body(AuthorPipe) input: AuthorInput): Promise<AuthorData> {

        const author = await this.authorService.create(input);
        this.logger.info(`Created new author with ID ${author.id}`);
        this.authorService.find

        return author.buildData();
    }

}
