import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonModule } from './common';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';

@Module({
    imports: [
        CommonModule,
        TypeOrmModule.forRoot(),
        AuthorModule,
        BookModule
    ]
})
export class ApplicationModule {}
