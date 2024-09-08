import { z } from 'zod';

export type FGBuildablePipelinePumpBag = z.infer<typeof FGBuildablePipelinePump.schema>;

export default class FGBuildablePipelinePump {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildablePipelinePump'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildablePipelinePumpBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}