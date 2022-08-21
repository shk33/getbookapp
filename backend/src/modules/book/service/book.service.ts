import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Book, BookInput } from '../model';
import { Author } from '../../author/model/author.entity';

@Injectable()
export class BookService {

    public constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>
    ) { }

    public async find(): Promise<Book[]> {
        return this.bookRepository.find({ relations: ['author'] });
    }

    public async create(input: BookInput, author: Author): Promise<Book> {
        const newBook = await this.bookRepository.create({
            ...input,
            author,
        });

        await this.bookRepository.save(newBook);

        return newBook;
    }

}
