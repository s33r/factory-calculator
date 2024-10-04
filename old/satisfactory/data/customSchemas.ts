import { Decimal } from 'decimal.js';
import { z } from 'zod';


export const booleanString = z.string().transform((arg, context) => {
    const value = arg.trim().toLowerCase();

    if (value) {
        if (value === 'true' || value === '1') {
            return true;
        } else if (value === 'false' || value === '0') {
            return false;
        } else {
            context.addIssue({
                code   : 'custom',
                path   : context.path,
                message: `The value ${ arg } cannot be converted into a boolean.`,
            });
        }
    } else {
        return false;
    }
});

export const decimalString = z.string().or(z.number()).transform((arg, context) => {
    try {
        return new Decimal(arg);
    } catch (error) {
        context.addIssue({
            code   : 'custom',
            message: error instanceof Error ? error.message : `${ error }`,
            path   : context.path,
        });
    }
});
