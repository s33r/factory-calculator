import { z } from 'zod';

export type FGConsumableEquipmentBag = z.infer<typeof FGConsumableEquipment.schema>;

export default class FGConsumableEquipment {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGConsumableEquipment\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGConsumableEquipmentBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
