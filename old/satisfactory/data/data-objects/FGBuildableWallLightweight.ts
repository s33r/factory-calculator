import { z } from 'zod';
import { booleanString, decimalString } from '../customSchemas.js';
import { customScaleTypeEnum, occlusionShapeEnum, wallTypeEnum } from '../enums.js';

export type FGBuildableWallLightweightBag = z.infer<typeof FGBuildableWallLightweight.schema>;

export default class FGBuildableWallLightweight {
    static get schema() {
        return z.object({
            NativeClass                       : z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildableWallLightweight\''),
            ClassName                         : z.string(),
            mWidth                            : decimalString,
            mHeight                           : decimalString,
            mElevation                        : decimalString,
            mAngularDepth                     : decimalString,
            mWallType                         : wallTypeEnum,
            mAngledVariants                   : z.string(),
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
            mBlueprintBuildEffectID           : z.number({ coerce: true }),
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGBuildableWallLightweightBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
