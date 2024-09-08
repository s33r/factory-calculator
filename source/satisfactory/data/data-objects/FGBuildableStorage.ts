import { z } from 'zod';

export type FGBuildableStorageBag = z.infer<typeof FGBuildableStorage.schema>;

export default class FGBuildableStorage {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableStorage'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableStorageBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}