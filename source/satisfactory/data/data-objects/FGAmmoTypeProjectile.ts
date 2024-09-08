
import { z } from 'zod';
import { formEnum, scannableTypeEnum, stackSizeEnum } from '../enums.js';
import { decimalString, booleanString } from '../customSchemas.js';

export type FGAmmoTypeProjectileBag = z.infer<typeof FGAmmoTypeProjectile.schema>;


export default class FGAmmoTypeProjectile {
    static get schema() {
        return z.object({
            NativeClass                                   : z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGAmmoTypeProjectile\''),
            ClassName                                     : z.string(),
            mCanTakeDamageBySameProjectileOrChild         : booleanString,
            mDamageTypesAtEndOfLife                       : z.string(),
            mGravityScaleOverLifespan                     : z.string(),
            mHomingAngleLimit                             : decimalString,
            mHomingMagnitudeMultiplierOverDistanceToTarget: z.string(),
            mHomingMagnitudeMultiplierOverLifespan        : z.string(),
            mHomingNeedsValidTarget                       : booleanString,
            mHomingOverlapSize                            : decimalString,
            mHomingOverrideTargets                        : z.string(),
            mHomingProjectile                             : booleanString,
            mInitialProjectileSpeedOverride               : decimalString,
            mMaxHomingAccelerationMagnitudeOverride       : decimalString,
            mProjectileHealthOverride                     : decimalString,
            mProjectileLifespan                           : decimalString,
            mProjectileMaxSpeedOverride                   : decimalString,
            mProjectileStickspan                          : decimalString,
            AmmoFiredDelegate                             : z.string(),
            // Location                                      : z.string(),
            mAbbreviatedDisplayName                       : z.string(),
            mAmmoColor                                    : z.string(),
            mAmmoDamageFalloff                            : z.string(),
            mAmmoScale                                    : decimalString,
            mAmmoTickFunction                             : z.string(),
            mCanBeDiscarded                               : booleanString,
            mClassToScanFor                               : z.string(),
            mCompatibleItemDescriptors                    : z.string(),
            mCrosshairMaterial                            : z.string(),
            mDamageTypesOnImpact                          : z.string(),
            mDescription                                  : z.string(),
            mDescriptorStatBars                           : z.string(),
            mDispersionFireRateMultiplier                 : decimalString,
            mDispersionPerShot                            : decimalString,
            mDispersionRecoveryTime                       : decimalString,
            mDisplayName                                  : z.string(),
            mEnergyValue                                  : decimalString,
            mFireRate                                     : decimalString,
            mFiringDirection                              : z.string(),
            mFiringDispersion                             : decimalString,
            mFiringSounds                                 : z.string(),
            mFiringSounds1P                               : z.string(),
            mFiringTransform                              : z.string(),
            mFiringTransformIgnoresDispersion             : booleanString,
            mFluidColor                                   : z.string(),
            mForm                                         : formEnum,
            mGasColor                                     : z.string(),
            mHasBeenInitialized                           : booleanString,
            mMagazineMeshMaterials                        : z.string(),
            mMagazineMeshMaterials1p                      : z.string(),
            mMagazineSize                                 : z.number({ coerce: true }),
            mMaxAmmoEffectiveRange                        : decimalString,
            mMenuPriority                                 : decimalString,
            mMuzzleFlashScale                             : z.string(),
            mPersistentBigIcon                            : z.string(),
            mPlayFireEffects                              : booleanString.optional(),
            mRadioactiveDecay                             : decimalString,
            mReloadTimeMultiplier                         : decimalString,
            mRememberPickUp                               : booleanString,
            mResourceSinkPoints                           : z.number({ coerce: true }),
            mRestingDispersion                            : decimalString,
            mScannableType                                : scannableTypeEnum,
            mScannerDisplayText                           : z.string(),
            mScannerLightColor                            : z.string(),
            mShouldOverrideScannerDisplayText             : booleanString,
            mSmallIcon                                    : z.string(),
            mStackSize                                    : stackSizeEnum,
            mSubCategories                                : z.string(),
            mWeaponDamageMultiplier                       : decimalString,
            // Trail_Velocity                                : decimalString,
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGAmmoTypeProjectileBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
