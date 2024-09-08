import { z } from 'zod';

export type FGBuildableGeneratorGeoThermalBag = z.infer<typeof FGBuildableGeneratorGeoThermal.schema>;

export default class FGBuildableGeneratorGeoThermal {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableGeneratorGeoThermal'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableGeneratorGeoThermalBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}