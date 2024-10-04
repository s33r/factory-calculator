import UnitMap from './UnitMap.js';
import type { RawValue, UnitValueArgs } from './UnitValue.js';
import type UnitValue from './UnitValue.js';

export default class ReadonlyUnitMap {
    readonly #data: UnitMap;

    constructor(data?: Array<UnitValue | UnitValueArgs> | Record<string, UnitValue | UnitValueArgs> | UnitMap | ReadonlyUnitMap) {
        this.#data = new UnitMap(data);
    }

    get size() { return this.#data.size; }

    get(
        unit: string,
        defaultValue: RawValue = 0,
    ): UnitValue {
        return this.#data.get(unit, defaultValue);
    }

    [Symbol.iterator](): IterableIterator<UnitValue> {
        return this.#data[Symbol.iterator]();
    }


    entries() { return this[Symbol.iterator](); }


    keys(): IterableIterator<string> { return this.#data.keys(); }

    values(): IterableIterator<UnitValue> {
        return this.#data.values();
    }

    map<T>(
        callback: (entry: UnitValue, index: number, unitMap: this) => T,
        thisArg?: any,
    ) {
        return this.#data.map((entry, index) => callback(entry, index, this), thisArg);
    }

    forEach(
        callback: (entry: UnitValue, index: number, unitMap: this) => void,
        thisArg?: any,
    ) {
        this.#data.forEach((entry, index) => callback(entry, index, this), thisArg);
    }

    filter(
        callback: (entry: UnitValue, index: number, unitMap: this) => boolean,
        thisArg?: any,
    ) {
        return this.#data.filter((entry, index) => callback(entry, index, this), thisArg);
    }

    toString(
        delimiter = '\n',
        order: 'pre' | 'post' = 'post',
    ) {
        return this.#data.toString(delimiter, order);
    }
}
