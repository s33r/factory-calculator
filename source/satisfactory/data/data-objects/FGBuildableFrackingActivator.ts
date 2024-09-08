import { z } from 'zod';

export type FGBuildableFrackingActivatorBag = z.infer<typeof FGBuildableFrackingActivator.schema>;

export default class FGBuildableFrackingActivator {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableFrackingActivator'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableFrackingActivatorBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}