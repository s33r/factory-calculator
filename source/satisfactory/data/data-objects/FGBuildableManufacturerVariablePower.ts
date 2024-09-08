import { z } from 'zod';

export type FGBuildableManufacturerVariablePowerBag = z.infer<typeof FGBuildableManufacturerVariablePower.schema>;

export default class FGBuildableManufacturerVariablePower {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableManufacturerVariablePower'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableManufacturerVariablePowerBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}