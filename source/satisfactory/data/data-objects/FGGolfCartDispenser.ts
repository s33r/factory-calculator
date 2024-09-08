import { z } from 'zod';

export type FGGolfCartDispenserBag = z.infer<typeof FGGolfCartDispenser.schema>;

export default class FGGolfCartDispenser {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGGolfCartDispenser'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGGolfCartDispenserBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}