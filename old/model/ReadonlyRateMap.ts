import { Decimal } from 'decimal.js';
import type { RateInputAmount, RateMapArgs } from './RateMap.js';
import RateMap from './RateMap.js';

export class ReadonlyRateMap implements ReadonlyMap<string, Decimal> {
    readonly #data: RateMap;

    constructor(data?: RateMapArgs | Map<string, RateInputAmount>) {
        this.#data = new RateMap(data);
    }

    get size() { return this.#data.size; }

    has(item: string): boolean { return this.#data.has(item); }
    get(item: string): Decimal { return this.#data.get(item) ?? new Decimal(0); }

    entries() { return this.#data.entries(); }
    keys() { return this.#data.keys(); }
    values() { return this.#data.values(); }

    [Symbol.iterator]() {
        return this.#data[Symbol.iterator]();
    }

    forEach(
        callbackfn: (amount: Decimal, item: string, map: ReadonlyRateMap) => void,
        thisArg?: any,
    ): void {
        this.#data.forEach((value, key) => callbackfn(value, key, this), thisArg);
    }

    filter(
        callbackfn: (amount: Decimal, item: string) => boolean,
    ): RateMap {
        return new RateMap(Array.from(this.entries()).filter(([item, amount]) => callbackfn(amount, item)));
    }

    toBag() { return Object.fromEntries(this); }
    toTuple() { return Array.from(this.entries()); }
    toRateMap() { return new RateMap(this.#data); }
}
