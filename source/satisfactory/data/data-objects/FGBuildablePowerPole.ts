import { z } from 'zod';

export type FGBuildablePowerPoleBag = z.infer<typeof FGBuildablePowerPole.schema>;

export default class FGBuildablePowerPole {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildablePowerPole\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGBuildablePowerPoleBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
