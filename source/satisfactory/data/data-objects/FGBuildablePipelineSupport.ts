import { z } from 'zod';

export type FGBuildablePipelineSupportBag = z.infer<typeof FGBuildablePipelineSupport.schema>;

export default class FGBuildablePipelineSupport {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildablePipelineSupport'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildablePipelineSupportBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}