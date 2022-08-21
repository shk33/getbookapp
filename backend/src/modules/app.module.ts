import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonModule } from './common';
import { AuthorModule } from './author/author.module';

@Module({
    imports: [
        CommonModule,
        TypeOrmModule.forRoot(),
        AuthorModule
    ]
})
export class ApplicationModule {}
