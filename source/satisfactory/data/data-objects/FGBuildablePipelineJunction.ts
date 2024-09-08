import { z } from 'zod';

export type FGBuildablePipelineJunctionBag = z.infer<typeof FGBuildablePipelineJunction.schema>;

export default class FGBuildablePipelineJunction {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildablePipelineJunction'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildablePipelineJunctionBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}