import { z } from 'zod';

export type FGBuildableTrainPlatformCargoBag = z.infer<typeof FGBuildableTrainPlatformCargo.schema>;

export default class FGBuildableTrainPlatformCargo {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildableTrainPlatformCargo\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGBuildableTrainPlatformCargoBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
