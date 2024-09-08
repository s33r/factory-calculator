import { z } from 'zod';

export type FGBuildableFrackingExtractorBag = z.infer<typeof FGBuildableFrackingExtractor.schema>;

export default class FGBuildableFrackingExtractor {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableFrackingExtractor'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableFrackingExtractorBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}