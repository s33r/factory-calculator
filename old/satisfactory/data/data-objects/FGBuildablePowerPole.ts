import { z } from 'zod';
import { booleanString, decimalString } from '../customSchemas.js';
import { customScaleTypeEnum, occlusionShapeEnum, powerPoleTypeEnum } from '../enums.js';

export type FGBuildablePowerPoleBag = z.infer<typeof FGBuildablePowerPole.schema>;

export default class FGBuildablePowerPole {
    static get schema() {
        return z.object({
            NativeClass                       : z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildablePowerPole\''),
            ClassName                         : z.string(),
            mPowerConnections                 : z.string(),
            mPowerPoleType                    : powerPoleTypeEnum,
            mPowerTowerWireMaxLength          : decimalString,
            mHasPower                         : booleanString,
            mDisplayName                      : z.string(),
            mDescription                      : z.string(),
            MaxRenderDistance                 : decimalString,
            mAlternativeMaterialRecipes       : z.string(),
            mContainsComponents               : booleanString,
            mIsConsideredForBaseWeightValue   : decimalString,
            mBuildEffectSpeed                 : decimalString,
            mAllowColoring                    : booleanString,
            mAllowPatterning                  : booleanString,
            mSkipBuildEffect                  : booleanString,
            mForceNetUpdateOnRegisterPlayer   : booleanString,
            mToggleDormancyOnInteraction      : booleanString,
            mIsMultiSpawnedBuildable          : booleanString,
            mShouldShowAttachmentPointVisuals : booleanString,
            mCreateClearanceMeshRepresentation: booleanString,
            mCanContainLightweightInstances   : booleanString,
            mAffectsOcclusion                 : booleanString,
            mOcclusionShape                   : occlusionShapeEnum,
            mScaleCustomOffset                : decimalString,
            mCustomScaleType                  : customScaleTypeEnum,
            mOcclusionBoxInfo                 : z.string(),
            mAttachmentPoints                 : z.string(),
            mInteractingPlayers               : z.string(),
            mIsUseable                        : booleanString,
            mHideOnBuildEffectStart           : booleanString,
            mShouldModifyWorldGrid            : booleanString,
            mBlueprintBuildEffectID           : decimalString,
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGBuildablePowerPoleBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
