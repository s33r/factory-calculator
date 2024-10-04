import { z } from 'zod';

export type FGBuildableCircuitSwitchBag = z.infer<typeof FGBuildableCircuitSwitch.schema>;

export default class FGBuildableCircuitSwitch {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildableCircuitSwitch\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGBuildableCircuitSwitchBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
