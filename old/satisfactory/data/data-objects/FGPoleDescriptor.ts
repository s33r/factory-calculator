import { z } from 'zod';
import { formEnum, scannableTypeEnum, stackSizeEnum } from '../enums.js';
import { booleanString, decimalString } from '../customSchemas.js';

export type FGPoleDescriptorBag = z.infer<typeof FGPoleDescriptor.schema>;

export default class FGPoleDescriptor {
    static get schema() {
        return z.object({
            NativeClass                      : z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGPoleDescriptor\''),
            ClassName                        : z.string(),
            mDisplayName                     : z.string(),
            mDescription                     : z.string(),
            mAbbreviatedDisplayName          : z.string(),
            mStackSize                       : stackSizeEnum,
            mCanBeDiscarded                  : booleanString,
            mRememberPickUp                  : booleanString,
            mEnergyValue                     : decimalString,
            mRadioactiveDecay                : decimalString,
            mForm                            : formEnum,
            mSmallIcon                       : z.string(),
            mPersistentBigIcon               : z.string(),
            mCrosshairMaterial               : z.string(),
            mDescriptorStatBars              : z.string(),
            mSubCategories                   : z.string(),
            mMenuPriority                    : decimalString,
            mFluidColor                      : z.string(),
            mGasColor                        : z.string(),
            mCompatibleItemDescriptors       : z.string(),
            mClassToScanFor                  : z.string(),
            mScannableType                   : scannableTypeEnum,
            mShouldOverrideScannerDisplayText: booleanString,
            mScannerDisplayText              : z.string(),
            mScannerLightColor               : z.string(),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGPoleDescriptorBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
