import { z } from 'zod';

export type FGAmmoTypeInstantHitBag = z.infer<typeof FGAmmoTypeInstantHit.schema>;

export default class FGAmmoTypeInstantHit {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGAmmoTypeInstantHit'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGAmmoTypeInstantHitBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}