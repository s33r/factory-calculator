import { z } from 'zod';

export type FGBuildableSpaceElevatorBag = z.infer<typeof FGBuildableSpaceElevator.schema>;

export default class FGBuildableSpaceElevator {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildableSpaceElevator\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGBuildableSpaceElevatorBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
