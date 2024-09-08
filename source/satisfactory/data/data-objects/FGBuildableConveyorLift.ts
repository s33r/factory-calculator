import { z } from 'zod';

export type FGBuildableConveyorLiftBag = z.infer<typeof FGBuildableConveyorLift.schema>;

export default class FGBuildableConveyorLift {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableConveyorLift'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableConveyorLiftBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}