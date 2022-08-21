import { Body, Controller, Get, HttpStatus, Post, BadRequestException } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '../../common';

import { BookPipe } from '../flow';
import { BookData, BookInput } from '../model';
import { BookService } from '../service';
import { AuthorService } from '../../author/service/';

@Controller('books')
@ApiTags('book')
@ApiBearerAuth()
export class BookController {

    public constructor(
        private readonly logger: LoggerService,
        private readonly bookService: BookService,
        private readonly authorService: AuthorService
    ) { }

    @Get()
    @ApiResponse({ status: HttpStatus.OK, isArray: true, type: BookData })
    public async find(): Promise<BookData[]> {

        const books = await this.bookService.find();

        return books.map(book => book.buildData());
    }

    @Post()
    // @UseGuards(RestrictedGuard)
    @ApiResponse({ status: HttpStatus.CREATED, type: BookData })
    public async create(@Body(BookPipe) input: BookInput): Promise<BookData> {

        const authorId = input.authorId;
        const author = await this.authorService.findById(authorId);

        if(!author){
            throw new BadRequestException('Invalid authorId');
        }

        const book = await this.bookService.create(input, author);
        this.logger.info(`Created new book with ID ${book.id}`);

        return book.buildData();
    }

}
