import { z } from 'zod';

export type FGEquipmentStunSpearBag = z.infer<typeof FGEquipmentStunSpear.schema>;

export default class FGEquipmentStunSpear {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGEquipmentStunSpear'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGEquipmentStunSpearBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}