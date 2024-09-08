import { z } from 'zod';

export type FGBuildablePipeReservoirBag = z.infer<typeof FGBuildablePipeReservoir.schema>;

export default class FGBuildablePipeReservoir {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildablePipeReservoir'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildablePipeReservoirBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}