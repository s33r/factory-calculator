import { z } from 'zod';

export type FGConsumableDescriptorBag = z.infer<typeof FGConsumableDescriptor.schema>;

export default class FGConsumableDescriptor {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGConsumableDescriptor\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGConsumableDescriptorBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
