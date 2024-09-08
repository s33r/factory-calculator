import { z } from 'zod';

export type FGBuildableWalkwayLightweightBag = z.infer<typeof FGBuildableWalkwayLightweight.schema>;

export default class FGBuildableWalkwayLightweight {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableWalkwayLightweight'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableWalkwayLightweightBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}