import { z } from 'zod';

export type FGBuildableAttachmentMergerBag = z.infer<typeof FGBuildableAttachmentMerger.schema>;

export default class FGBuildableAttachmentMerger {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableAttachmentMerger'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableAttachmentMergerBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}