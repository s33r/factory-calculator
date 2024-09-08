import { z } from 'zod';

export type FGBuildableSnowDispenserBag = z.infer<typeof FGBuildableSnowDispenser.schema>;

export default class FGBuildableSnowDispenser {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableSnowDispenser'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableSnowDispenserBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}