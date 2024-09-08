import { z } from 'zod';

export type FGBuildableSplitterSmartBag = z.infer<typeof FGBuildableSplitterSmart.schema>;

export default class FGBuildableSplitterSmart {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableSplitterSmart'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableSplitterSmartBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}