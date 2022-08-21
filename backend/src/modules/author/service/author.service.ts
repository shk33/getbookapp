import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Author, AuthorInput } from '../model';

@Injectable()
export class AuthorService {

    public constructor(
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>
    ) { }

    public async find(): Promise<Author[]> {
        return this.authorRepository.find();
    }

    public async findById(id: number): Promise<Author | undefined> {
        return this.authorRepository.findOne({ id });
    }

    public async findWithBooks(): Promise<Author[]> {
        return this.authorRepository.find({ relations: ['books'] });
    }

    public async create(input: AuthorInput): Promise<Author> {

        const author = new Author();

        author.name = input.name;

        return this.authorRepository.save(author);
    }

}
