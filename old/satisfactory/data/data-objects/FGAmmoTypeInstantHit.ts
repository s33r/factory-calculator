/* eslint-disable camelcase */
import { z } from 'zod';
import { booleanString, decimalString } from '../customSchemas.js';
import { formEnum, scannableTypeEnum, stackSizeEnum } from '../enums.js';

export type FGAmmoTypeInstantHitBag = z.infer<typeof FGAmmoTypeInstantHit.schema>;

export default class FGAmmoTypeInstantHit {
    static get schema() {
        return z.object({
            NativeClass                      : z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGAmmoTypeInstantHit\''),
            ClassName                        : z.string(),
            Location                         : z.string(),
            Trail_Velocity                   : decimalString,
            mPlayFireEffects                 : booleanString.optional(),
            AmmoFiredDelegate                : z.string(),
            mFiringTransform                 : z.string(),
            mFiringDirection                 : z.string(),
            mMagazineSize                    : z.number({ coerce: true }),
            mMaxAmmoEffectiveRange           : decimalString,
            mReloadTimeMultiplier            : decimalString,
            mFireRate                        : decimalString,
            mFiringTransformIgnoresDispersion: booleanString,
            mDispersionFireRateMultiplier    : decimalString,
            mDispersionPerShot               : decimalString,
            mRestingDispersion               : decimalString,
            mFiringDispersion                : decimalString,
            mDispersionRecoveryTime          : decimalString,
            mHasBeenInitialized              : booleanString,
            mWeaponDamageMultiplier          : decimalString,
            mMagazineMeshMaterials           : z.string(),
            mMagazineMeshMaterials1p         : z.string(),
            mDamageTypesOnImpact             : z.string(),
            mAmmoDamageFalloff               : z.string(),
            mMuzzleFlashScale                : z.string(),
            mFiringSounds                    : z.string(),
            mFiringSounds1P                  : z.string(),
            mAmmoColor                       : z.string(),
            mAmmoScale                       : decimalString,
            mAmmoTickFunction                : z.string(),
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
            mResourceSinkPoints              : z.number({ coerce: true }),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGAmmoTypeInstantHitBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
