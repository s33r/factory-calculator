import { z } from 'zod';

export type FGEquipmentZiplineBag = z.infer<typeof FGEquipmentZipline.schema>;

export default class FGEquipmentZipline {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGEquipmentZipline'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGEquipmentZiplineBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}