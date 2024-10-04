import { z } from 'zod';

export type FGBuildableBeamLightweightBag = z.infer<typeof FGBuildableBeamLightweight.schema>;

export default class FGBuildableBeamLightweight {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildableBeamLightweight\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGBuildableBeamLightweightBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
