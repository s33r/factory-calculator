import { Decimal } from 'decimal.js';
import { z } from 'zod';
import { toKebabCase } from './util.js';

export type UnitValueTuple = z.infer<typeof UnitValue.tupleSchema>;
export type UnitValueBag = z.infer<typeof UnitValue.bagSchema>;
export type UnitValueArgs = z.infer<typeof UnitValue.schema>;
export type RawValue = Decimal | number | string;

export default class UnitValue {
    static get schema() {
        return this.tupleSchema.or(this.bagSchema);
    }

    static get tupleSchema() {
        return z.tuple([
            z.string(),
            z.instanceof(Decimal).or(z.number()).or(z.string()),
        ]);
    }

    static get bagSchema() {
        return z.object({
            unit : z.string(),
            value: z.instanceof(Decimal).or(z.number()).or(z.string()),
        });
    }

    static toString(
        uv: UnitValue,
        order: 'pre' | 'post' = 'post',
        paddingValue = 0,
        paddingUnit = 0,
    ): string {
        if (order === 'pre') {
            // Iron Bar 30
            return `[${ uv.unit.padStart(paddingUnit) }, ${ uv.value.toString().padEnd(paddingValue) }]`;
        } else {
            // 30 Iron Bar
            return `[${ uv.value.toString().padStart(paddingValue) }, ${ uv.unit.padEnd(paddingUnit) }]`;
        }
    }

    static checkUnits(
        uv1: UnitValue,
        uv2?: UnitValue,
    ): boolean {
        if (uv2) {
            return uv1.unit === uv2.unit;
        } else {
            return true;
        }
    }

    static add(
        uv1: UnitValue,
        uv2?: UnitValue,
    ): UnitValue {
        if (this.checkUnits(uv1, uv2)) {
            return new UnitValue([uv1.unit, uv1.value.add(uv2?.value ?? 0)]);
        } else {
            throw new Error(`The units for uv1 and uv2 don't match! (${ uv1.unit } != ${ uv2?.unit })`);
        }
    }

    static sub(
        uv1: UnitValue,
        uv2?: UnitValue,
    ): UnitValue {
        if (this.checkUnits(uv1, uv2)) {
            return new UnitValue([uv1.unit, uv1.value.sub(uv2?.value ?? 0)]);
        } else {
            throw new Error(`The units for uv1 and uv2 don't match! (${ uv1.unit } != ${ uv2?.unit })`);
        }
    }

    static mul(
        uv1: UnitValue,
        uv2?: UnitValue,
    ): UnitValue {
        if (this.checkUnits(uv1, uv2)) {
            return new UnitValue([uv1.unit, uv1.value.mul(uv2?.value ?? 1)]);
        } else {
            throw new Error(`The units for uv1 and uv2 don't match! (${ uv1.unit } != ${ uv2?.unit })`);
        }
    }

    static equals(
        uv1: UnitValue,
        uv2?: UnitValue,
    ): boolean {
        return (uv1.unit === uv2?.unit) && uv1.value.equals(uv2?.value);
    }

    static div(
        uv1: UnitValue,
        uv2?: UnitValue,
    ): UnitValue {
        if (this.checkUnits(uv1, uv2)) {
            return new UnitValue([uv1.unit, uv1.value.sub(uv2?.value ?? 1)]);
        } else {
            throw new Error(`The units for uv1 and uv2 don't match! (${ uv1.unit } != ${ uv2?.unit })`);
        }
    }

    static from(
        unit: string,
        value?: Decimal | number | string | null,
        defaultValue: RawValue = 0,
    ): UnitValue {
        return new UnitValue([unit, new Decimal(value || defaultValue)]);
    }

    static convert(
        uv1: UnitValue,
        unit: string,
        converter?: (value: Decimal) => Decimal,
    ) {
        return new UnitValue([unit, converter ? converter(uv1.value) : uv1.value]);
    }

    readonly #unit : string;
    readonly #value: Decimal;

    constructor(data: UnitValueArgs) {
        if (Array.isArray(data)) {
            this.#unit = toKebabCase(data[0]);
            this.#value = new Decimal(data[1]);
        } else {
            this.#unit = toKebabCase(data.unit);
            this.#value = new Decimal(data.value);
        }
    }

    get unit() { return this.#unit; }
    get value() { return this.#value; }

    add(uv2?: UnitValue) { return UnitValue.add(this, uv2); }
    sub(uv2?: UnitValue) { return UnitValue.sub(this, uv2); }
    div(uv2?: UnitValue) { return UnitValue.div(this, uv2); }
    mul(uv2?: UnitValue) { return UnitValue.mul(this, uv2); }
    equals(uv2?: UnitValue) { return UnitValue.equals(this, uv2); }

    convert(unit: string, converter?: (value: Decimal) => Decimal) { return UnitValue.convert(this, unit, converter); }

    toString(
        order: 'pre' | 'post' = 'post',
        paddingValue = 0,
        paddingUnit = 0,
    ): string {
        return UnitValue.toString(this, order, paddingValue, paddingUnit);
    }
}
