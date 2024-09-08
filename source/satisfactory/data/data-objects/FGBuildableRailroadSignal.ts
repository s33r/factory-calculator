import { z } from 'zod';

export type FGBuildableRailroadSignalBag = z.infer<typeof FGBuildableRailroadSignal.schema>;

export default class FGBuildableRailroadSignal {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableRailroadSignal'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableRailroadSignalBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}