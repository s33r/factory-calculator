import { z } from 'zod';

export type FGAmmoTypeSpreadshotBag = z.infer<typeof FGAmmoTypeSpreadshot.schema>;

export default class FGAmmoTypeSpreadshot {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGAmmoTypeSpreadshot'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGAmmoTypeSpreadshotBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}