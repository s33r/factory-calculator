import { z } from 'zod';

export type FGSuitBaseBag = z.infer<typeof FGSuitBase.schema>;

export default class FGSuitBase {
    static get schema() {
        return z.object({
            NativeClass: z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGSuitBase\''),
            ClassName  : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGSuitBaseBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
