import { z } from 'zod';
import { formEnum, scannableTypeEnum, stackSizeEnum } from '../enums.js';
import { booleanString, decimalString } from '../customSchemas.js';

export type FGItemDescriptorBag = z.infer<typeof FGItemDescriptor.schema>;

export default class FGItemDescriptor {
    static get schema() {
        return     z.object({
            NativeClass                      : z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGItemDescriptor\''),
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
            mFluidColor                      : z.string(), // Color => '(B=0,G=0,R=0,A=0)',
            mGasColor                        : z.string(), // Color => '(B=0,G=0,R=0,A=0)',
            mCompatibleItemDescriptors       : z.string(),
            mClassToScanFor                  : z.string(),
            mScannableType                   : scannableTypeEnum,
            mShouldOverrideScannerDisplayText: booleanString,
            mScannerDisplayText              : z.string(),
            mScannerLightColor               : z.string(), // Color => '(B=0,G=0,R=0,A=0)',
            mResourceSinkPoints              : decimalString,
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGItemDescriptorBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
