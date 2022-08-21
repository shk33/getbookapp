import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Book, BookInput } from '../model';

@Injectable()
export class BookService {

    public constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>
    ) { }

    public async find(): Promise<Book[]> {
        return this.bookRepository.find();
    }

    public async create(input: BookInput): Promise<Book> {

        const author = new Book();

        author.name = input.name;

        return this.bookRepository.save(author);
    }

}
