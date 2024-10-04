import { z } from 'zod';

export type FGBuildablePillarLightweightBag = z.infer<typeof FGBuildablePillarLightweight.schema>;

export default class FGBuildablePillarLightweight {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildablePillarLightweight\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGBuildablePillarLightweightBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
