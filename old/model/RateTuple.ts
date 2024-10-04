import { Decimal } from 'decimal.js';
import { z } from 'zod';
import { decimalSchema, toDecimal } from '../decimalSchema.js';

export const rateTupleSchema = z.tuple([
    z.string(),
    z.instanceof(Decimal),
]);

export type RateTuple = z.infer<typeof rateTupleSchema>;

export const rateTupleCreatorSchema = z.tuple([
    z.string(),
    decimalSchema,
]);

export type RateTupleCreator = z.infer<typeof rateTupleCreatorSchema>;


export const createTuple = (
    [item, amount]:RateTupleCreator,
    defaultAmount = 1,
): RateTuple => [item, toDecimal(amount, defaultAmount)];
