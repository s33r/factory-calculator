import { z } from 'zod';

export type FGItemDescriptorNuclearFuelBag = z.infer<typeof FGItemDescriptorNuclearFuel.schema>;

export default class FGItemDescriptorNuclearFuel {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGItemDescriptorNuclearFuel\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGItemDescriptorNuclearFuelBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
