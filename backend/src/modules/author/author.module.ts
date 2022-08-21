import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonModule } from '../common';
import { AuthorController } from './controller';
import { Author } from './model';
import { AuthorService } from './service';

@Module({
    imports: [
        CommonModule,
        TypeOrmModule.forFeature([
            Author
        ])
    ],
    providers: [
        AuthorService
    ],
    controllers: [
        AuthorController
    ],
    exports: [AuthorService]
})
export class AuthorModule { }
