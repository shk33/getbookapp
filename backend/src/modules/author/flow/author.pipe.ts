import * as Joi from 'joi';

import { JoiValidationPipe } from '../../common';
import { Author, AuthorInput } from '../model';

export class AuthorPipe extends JoiValidationPipe {

    public buildSchema(): Joi.Schema {

        return Joi.object<AuthorInput>({
            name: Joi.string().required().max(Author.NAME_LENGTH),
        });

    }
}
