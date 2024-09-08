import { z } from 'zod';

export type FGBuildableGeneratorNuclearBag = z.infer<typeof FGBuildableGeneratorNuclear.schema>;

export default class FGBuildableGeneratorNuclear {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableGeneratorNuclear'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableGeneratorNuclearBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}