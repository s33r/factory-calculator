import { z } from 'zod';

export type FGBuildablePassthroughPipeHyperBag = z.infer<typeof FGBuildablePassthroughPipeHyper.schema>;

export default class FGBuildablePassthroughPipeHyper {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildablePassthroughPipeHyper'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildablePassthroughPipeHyperBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}