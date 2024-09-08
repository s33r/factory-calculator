import { z } from 'zod';

export type FGConveyorPoleStackableBag = z.infer<typeof FGConveyorPoleStackable.schema>;

export default class FGConveyorPoleStackable {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGConveyorPoleStackable\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGConveyorPoleStackableBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
