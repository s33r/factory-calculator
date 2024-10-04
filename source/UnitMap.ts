import { Decimal } from 'decimal.js';
import type { RawValue, UnitValueArgs } from './UnitValue.js';
import UnitValue from './UnitValue.js';
import { getMaxLength } from './util.js';
import ReadonlyUnitMap from './ReadonlyUnitMap.js';

const zero = new Decimal(0);

export default class UnitMap {
    static combine(
        maps: Array<UnitMap | ReadonlyUnitMap>,
    ): UnitMap {
        const result = new UnitMap();

        maps.forEach(map => {
            map.forEach(entry => result.add(entry));
        });

        return result;
    }

    readonly #data: Map<string, Decimal>;

    constructor(data?: Array<UnitValue | UnitValueArgs> | Record<string, UnitValue | UnitValueArgs> | UnitMap | ReadonlyUnitMap) {
        this.#data = new Map();

        if (Array.isArray(data)) {
            data?.forEach(item => item instanceof UnitValue ? this.add(item) : this.add(new UnitValue(item)));
        } else if (data instanceof UnitMap || data instanceof ReadonlyUnitMap) {
            data.forEach(value => this.add(value));
        } else {
            Object.entries(data ?? {}).forEach(([, item]) => item instanceof UnitValue ? this.add(item) : this.add(new UnitValue(item)));
        }
    }

    get size() { return this.#data.size; }

    clear(): this { this.#data.clear(); return this; }

    /**
     * Removes any values that are equal to zero.
     */
    trim(): this {
        Array.from(this.keys()).forEach(key => {
            if (zero.eq(this.#data.get(key) ?? 0)) {
                this.#data.delete(key);
            }
        });

        return this;
    }

    get(
        unit: string,
        defaultValue: RawValue = 0,
    ): UnitValue {
        return new UnitValue([unit, this.#data.get(unit) ?? new Decimal(defaultValue)]);
    }

    set(
        item: UnitValue | UnitValueArgs,
    ): this {
        const value = new UnitValue(item);

        this.#data.set(value.unit, value.value);

        return this;
    }


    add(
        item: UnitValue | UnitValueArgs,
    ): this {
        const { unit, value } = new UnitValue(item);

        this.#data.set(unit, value.add(this.get(unit).value));

        return this;
    }

    sub(
        item: UnitValue | UnitValueArgs,
    ): this {
        const { unit, value } = new UnitValue(item);

        this.#data.set(unit, value.sub(this.get(unit).value));

        return this;
    }

    mul(
        item: UnitValue | UnitValueArgs,
    ): this {
        const { unit, value } = new UnitValue(item);

        this.#data.set(unit, value.mul(this.get(unit, 1).value));

        return this;
    }

    div(
        item: UnitValue | UnitValueArgs,
    ): this {
        const { unit, value } = new UnitValue(item);

        this.#data.set(unit, value.sub(this.get(unit, 1).value));

        return this;
    }

    scale(
        factor: Decimal | number | string,
    ): this {
        for (const key of this.keys()) {
            this.mul([key, factor]);
        }

        return this;
    }

    *[Symbol.iterator](): IterableIterator<UnitValue> {
        for (const entry of this.#data) {
            yield new UnitValue(entry);
        }
    }


    entries() { return this[Symbol.iterator]; }


    keys(): IterableIterator<string> { return this.#data.keys(); }

    *values(): IterableIterator<UnitValue> {
        for (const entry of this.#data) {
            yield new UnitValue(entry);
        }
    }

    map<T>(
        callback: (entry: UnitValue, index: number, unitMap: this) => T,
        thisArg?: any,
    ) {
        return Array.from(this).map((entry, index) => callback(entry, index, this), thisArg);
    }

    forEach(
        callback: (entry: UnitValue, index: number, unitMap: this) => void,
        thisArg?: any,
    ) {
        Array.from(this).forEach((entry, index) => callback(entry, index, this), thisArg);
    }

    filter(
        callback: (entry: UnitValue, index: number, unitMap: this) => boolean,
        thisArg?: any,
    ) {
        return new UnitMap(Array.from(this).filter((entry, index) => callback(entry, index, this), thisArg));
    }

    toString(
        delimiter = '\n',
        order: 'pre' | 'post' = 'post',
    ) {
        let paddingValue = 0;
        let paddingUnit = 0;

        if (order === 'pre') {
            paddingUnit = getMaxLength(Array.from(this.keys()));
        } else {
            paddingValue = getMaxLength(Array.from(this.values()));
        }

        return this.map(entry => entry.toString(order, paddingValue, paddingUnit)).join(delimiter);
    }
}
