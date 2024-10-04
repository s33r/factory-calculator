import { z } from 'zod';
import { decimalString } from '../customSchemas.js';

export type FGCustomizationRecipeBag = z.infer<typeof FGCustomizationRecipe.schema>;

export default class FGCustomizationRecipe {
    static get schema() {
        return z.object({
            NativeClass                      : z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGCustomizationRecipe\''),
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

    constructor(data: FGCustomizationRecipeBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
