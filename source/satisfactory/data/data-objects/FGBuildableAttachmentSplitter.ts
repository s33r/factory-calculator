import { z } from 'zod';

export type FGBuildableAttachmentSplitterBag = z.infer<typeof FGBuildableAttachmentSplitter.schema>;

export default class FGBuildableAttachmentSplitter {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableAttachmentSplitter'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableAttachmentSplitterBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}