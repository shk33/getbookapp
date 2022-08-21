import * as Joi from 'joi';

import { JoiValidationPipe } from '../../common';
import { Book, BookInput } from '../model';

export class BookPipe extends JoiValidationPipe {

    public buildSchema(): Joi.Schema {

        return Joi.object<BookInput>({
            name: Joi.string().required().max(Book.NAME_LENGTH),
        });

    }
}
