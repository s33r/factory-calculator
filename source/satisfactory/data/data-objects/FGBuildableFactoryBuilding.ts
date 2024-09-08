import { z } from 'zod';

export type FGBuildableFactoryBuildingBag = z.infer<typeof FGBuildableFactoryBuilding.schema>;

export default class FGBuildableFactoryBuilding {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildableFactoryBuilding\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGBuildableFactoryBuildingBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
