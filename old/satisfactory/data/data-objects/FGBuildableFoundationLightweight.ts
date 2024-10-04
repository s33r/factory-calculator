import { z } from 'zod';

export type FGBuildableFoundationLightweightBag = z.infer<typeof FGBuildableFoundationLightweight.schema>;

export default class FGBuildableFoundationLightweight {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildableFoundationLightweight\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGBuildableFoundationLightweightBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
