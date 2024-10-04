import { Decimal } from 'decimal.js';
import { z } from 'zod';
import { getMaxLength } from '../../source/util.js';

export const rateInputAmountSchema = z.string().or(z.number()).or(z.instanceof(Decimal));

export const rateTupleSchema = z.tuple([
    z.string(),
    z.instanceof(Decimal),
]);

export const rateInputTupleSchema = z.tuple([
    z.string(),
    rateInputAmountSchema,
]);

export type RateTuple = z.infer<typeof rateTupleSchema>;
export type RateInputTuple = z.infer<typeof rateInputTupleSchema>;
export type RateInputAmount = z.infer<typeof rateInputAmountSchema>;
export type RateMapArgs = z.infer<typeof RateMap.schema>;

export default class RateMap implements Map<string, Decimal> {
    static get schema() {
        return z.array(rateInputTupleSchema).or(z.record(rateInputAmountSchema));
    }

    static toBag(rates: RateMap) {
        return Object.fromEntries(rates);
    }

    static toString(
        map: RateMap,
        delimiter = '\n',
    ) {
        const keys = Array.from(map.keys()).sort();

        const padding = getMaxLength(keys);

        return keys.map(item => `[${ item.padEnd(padding) }, ${ map.get(item) }]`).join(delimiter);
    }

    readonly #data: Map<string, Decimal>;

    constructor(data?: RateMapArgs | Map<string, RateInputAmount>) {
        this.#data = new Map();

        if (data instanceof Map) {
            data.forEach((amount, item) => this.add(item, amount));
        } else if (Array.isArray(data)) {
            data.forEach(([item, amount]) => this.add(item, amount));
        } else {
            Object.entries(data ?? {}).forEach(([item, amount]) => this.add(item, amount));
        }
    }


    get size() { return this.#data.size; }
    get [Symbol.toStringTag]() { return this.#data[Symbol.toStringTag]; }

    clear() { this.#data.clear(); }
    delete(item: string) { return this.#data.delete(item); }
    has(item: string): boolean { return this.#data.has(item); }
    get(item: string): Decimal { return this.#data.get(item) ?? new Decimal(0); }

    set(item: string, amount: RateInputAmount): this {
        this.#data.set(item, new Decimal(amount));

        return this;
    }

    add(item: string, amount: RateInputAmount): this {
        this.#data.set(item, this.get(item).add(amount));

        return this;
    }

    addMap(rateMap: RateMap | ReadonlyMap<string, Decimal>): this {
        rateMap.forEach((amount, item) => this.add(item, amount));

        return this;
    }

    subtract(item: string, amount: RateInputAmount): this {
        this.#data.set(item, this.get(item).add(amount));

        return this;
    }

    multiply(item: string, amount: RateInputAmount): this {
        this.#data.set(item, this.get(item).mul(amount));

        return this;
    }

    multiplyAll(amount: RateInputAmount) : this {
        this.forEach((value, item) => {
            this.multiply(item, value.mul(amount));
        });

        return this;
    }

    divide(item: string, amount: RateInputAmount): this {
        this.#data.set(item, this.get(item).div(amount));

        return this;
    }

    entries() { return this.#data.entries(); }
    keys() { return this.#data.keys(); }
    values() { return this.#data.values(); }

    [Symbol.iterator]() {
        return this.#data[Symbol.iterator]();
    }

    // forEach(
    //     callbackfn: (value: RateTuple, index: number, map: RateMap) => void,
    //     thisArg?: any,
    // ): void {
    //     Array.from(this.entries()).forEach(([item, amount], index) => callbackfn([item, amount], index, this), thisArg);

    //     // this.#data.forEach((amount, item, ) => callbackfn([item, amount], key, this), thisArg);
    // }

    forEach(
        callbackfn: (amount: Decimal, item: string, map: Map<string, Decimal>) => void,
        thisArg?: any,
    ): void {
        this.#data.forEach((amount, item ) => callbackfn(amount, item, this), thisArg);
    }


    filter(
        callbackfn: (value: RateTuple, index: number, map: RateMap) => boolean,
        thisArg?: any,
    ): RateMap {
        return new RateMap(Array.from(this.entries()).filter(([item, amount], index) => callbackfn([item, amount], index, this), thisArg));
    }

    map<T>(
        callbackfn: (value: RateTuple, index: number, map: RateMap) => T,
        thisArg?: any,
    ): Array<T> {
        return Array.from(this.#data).map(([item, amount], index) => callbackfn([item, amount], index, this), thisArg);
    }

    toBag() { return Object.fromEntries(this); }
    toTuple() { return Array.from(this.entries()); }
    toString() { return RateMap.toString(this); }
}

export const toTupleString = (
    tuple: RateTuple,
    namePadding = 0,
) => `[${ tuple[0].padEnd(namePadding) }, ${ tuple[1].toString() }]`;
