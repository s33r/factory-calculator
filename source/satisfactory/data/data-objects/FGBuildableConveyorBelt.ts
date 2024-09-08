import { z } from 'zod';

export type FGBuildableConveyorBeltBag = z.infer<typeof FGBuildableConveyorBelt.schema>;

export default class FGBuildableConveyorBelt {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableConveyorBelt'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableConveyorBeltBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}