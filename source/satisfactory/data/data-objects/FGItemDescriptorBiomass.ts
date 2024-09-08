import { z } from 'zod';

export type FGItemDescriptorBiomassBag = z.infer<typeof FGItemDescriptorBiomass.schema>;

export default class FGItemDescriptorBiomass {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGItemDescriptorBiomass'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGItemDescriptorBiomassBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}