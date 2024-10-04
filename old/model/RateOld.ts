import { Decimal } from 'decimal.js';
import { z } from 'zod';
import type { DecimalArg } from '../decimalSchema.js';
import { decimalSchema, toDecimal } from '../decimalSchema.js';
import type { ResultContainer } from '@ehwillows/results/lib/ResultContainer.js';
import { failure, success, unwrap } from '@ehwillows/results/lib/ResultContainer.js';


export type RateBag = z.infer<typeof Rate.bagSchema>;
export type RateTuple = z.infer<typeof Rate.tupleSchema>;
export type RateArgs = z.infer<typeof Rate.schema>;

export default class Rate {
    static get schema() {
        return this.bagSchema.or(this.tupleSchema);
    }

    static get bagSchema() {
        return z.object({
            itemName: z.string(),
            amount  : decimalSchema,
        }).readonly();
    }

    static get tupleSchema() {
        return z.tuple([
            z.string(),
            decimalSchema,
        ]);
    }

    static toBag(data: Rate): RateBag { return { itemName: data.itemName, amount: data.amount.toString() }; }
    static toTuple(data: Rate): RateTuple { return [data.itemName, data.amount.toString()]; }
    static toString(data: Rate) { return `[${ data.itemName }, ${ data.amount }]`; }

    static toMap(
        data: ReadonlyArray<Rate | RateArgs>,
    ): Map<string, Rate> {
        const map = new Map<string, Rate>();

        data.forEach(d => {
            const rate = new Rate(d);

            map.set(rate.itemName, unwrap(this.add(rate, map.get(rate.itemName))));
        });

        return map;
    }

    static add(
        r1: Rate | RateArgs,
        ...r2: Array<Rate | DecimalArg>
    ): ResultContainer<Rate> {
        const initialRate =  new Rate(r1);
        const total = new Decimal(initialRate.amount);

        r2.forEach(operand => {
            if (operand instanceof Rate && operand.itemName !== initialRate.itemName) {
                return failure(`r1 (${ initialRate.itemName }) must match r2 (${ operand.itemName })`);
            } else if (operand instanceof Rate) {
                total.add(operand.amount);
            } else {
                total.add(toDecimal(operand));
            }
        });

        return success(new Rate([initialRate.itemName, total]));
    }

    static subtract(
        r1: Rate | RateArgs,
        ...r2: Array<Rate | DecimalArg>
    ): ResultContainer<Rate> {
        const initialRate =  new Rate(r1);
        const total = new Decimal(initialRate.amount);

        r2.forEach(operand => {
            if (operand instanceof Rate && operand.itemName !== initialRate.itemName) {
                return failure(`r1 (${ initialRate.itemName }) must match r2 (${ operand.itemName })`);
            } else if (operand instanceof Rate) {
                total.sub(operand.amount);
            } else {
                total.sub(toDecimal(operand));
            }
        });

        return success(new Rate([initialRate.itemName, total]));
    }

    static multiply(
        r1: Rate | RateArgs,
        ...r2: Array<Rate | DecimalArg>
    ): ResultContainer<Rate> {
        const initialRate =  new Rate(r1);
        const total = new Decimal(initialRate.amount);

        r2.forEach(operand => {
            if (operand instanceof Rate && operand.itemName !== initialRate.itemName) {
                return failure(`r1 (${ initialRate.itemName }) must match r2 (${ operand.itemName })`);
            } else if (operand instanceof Rate) {
                total.mul(operand.amount);
            } else {
                total.mul(toDecimal(operand, 1));
            }
        });

        return success(new Rate([initialRate.itemName, total]));
    }

    static divide(
        r1: Rate | RateArgs,
        ...r2: Array<Rate | DecimalArg>
    ): ResultContainer<Rate> {
        const initialRate =  new Rate(r1);
        const total = new Decimal(initialRate.amount);

        r2.forEach(operand => {
            if (operand instanceof Rate && operand.itemName !== initialRate.itemName) {
                return failure(`r1 (${ initialRate.itemName }) must match r2 (${ operand.itemName })`);
            } else if (operand instanceof Rate) {
                total.div(operand.amount);
            } else {
                total.div(toDecimal(operand, 1));
            }
        });

        return success(new Rate([initialRate.itemName, total]));
    }

    readonly #itemName: string;
    readonly #amount  : Decimal;

    constructor(
        data: RateArgs | Rate,
    ) {
        if (Array.isArray(data)) {
            this.#itemName = data[0];
            this.#amount = new Decimal(data[1] ?? 0);
        } else {
            this.#itemName = data.itemName;
            this.#amount = new Decimal(data.amount ?? 0);
        }
    }

    get itemName() { return this.#itemName; }
    get amount() { return this.#amount; }

    add(...r2: Array<Rate | DecimalArg>) { return Rate.add(this, ...r2); }
    subtract(...r2: Array<Rate | DecimalArg>) { return Rate.subtract(this, ...r2); }
    divide(...r2: Array<Rate | DecimalArg>) { return Rate.divide(this, ...r2); }
    multiply(...r2: Array<Rate | DecimalArg>) { return Rate.multiply(this, ...r2); }

    toBag() { return Rate.toBag(this); }
    toTuple() { return Rate.toTuple(this); }
    toString() { return Rate.toString(this); }
}
