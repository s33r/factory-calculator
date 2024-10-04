import { z } from 'zod';

export type FGBuildableGeneratorFuelBag = z.infer<typeof FGBuildableGeneratorFuel.schema>;

export default class FGBuildableGeneratorFuel {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildableGeneratorFuel\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGBuildableGeneratorFuelBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
