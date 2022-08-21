import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonModule } from '../common';
import { BookController } from './controller';
import { Book } from './model';
import { BookService } from './service';

@Module({
    imports: [
        CommonModule,
        TypeOrmModule.forFeature([
            Book
        ])
    ],
    providers: [
        BookService
    ],
    controllers: [
        BookController
    ],
    exports: []
})
export class BookModule { }
