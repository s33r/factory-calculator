import { z } from 'zod';

export type FGPortableMinerDispenserBag = z.infer<typeof FGPortableMinerDispenser.schema>;

export default class FGPortableMinerDispenser {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGPortableMinerDispenser'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGPortableMinerDispenserBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}