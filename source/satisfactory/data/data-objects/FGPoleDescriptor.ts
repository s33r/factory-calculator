import { z } from 'zod';

export type FGPoleDescriptorBag = z.infer<typeof FGPoleDescriptor.schema>;

export default class FGPoleDescriptor {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGPoleDescriptor\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGPoleDescriptorBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
