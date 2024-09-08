import { z } from 'zod';

export type FGBuildableRailroadTrackBag = z.infer<typeof FGBuildableRailroadTrack.schema>;

export default class FGBuildableRailroadTrack {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildableRailroadTrack\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGBuildableRailroadTrackBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
