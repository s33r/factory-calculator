import { z } from 'zod';

export type FGBuildableDockingStationBag = z.infer<typeof FGBuildableDockingStation.schema>;

export default class FGBuildableDockingStation {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildableDockingStation\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGBuildableDockingStationBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
