import { z } from 'zod';

export type FGJetPackBag = z.infer<typeof FGJetPack.schema>;

export default class FGJetPack {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGJetPack'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGJetPackBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}