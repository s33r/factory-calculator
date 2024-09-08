import { z } from 'zod';

export type FGBuildableTrainPlatformEmptyBag = z.infer<typeof FGBuildableTrainPlatformEmpty.schema>;

export default class FGBuildableTrainPlatformEmpty {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableTrainPlatformEmpty'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableTrainPlatformEmptyBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}