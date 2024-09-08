import { z } from 'zod';
import { decimalString } from '../customSchemas.js';

export type FGRecipeBag = z.infer<typeof FGRecipe.schema>;

export default class FGRecipe {
    static get schema() {
        return z.object({
            NativeClass                      : z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGRecipe\''),
            ClassName                        : z.string(),
            FullName                         : z.string(),
            mDisplayName                     : z.string(),
            mIngredients                     : z.string(),
            mProduct                         : z.string(),
            mManufacturingMenuPriority       : decimalString,
            mManufactoringDuration           : decimalString,
            mManualManufacturingMultiplier   : decimalString,
            mProducedIn                      : z.string(),
            mRelevantEvents                  : z.string(),
            mVariablePowerConsumptionConstant: decimalString,
            mVariablePowerConsumptionFactor  : decimalString,
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGRecipeBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
