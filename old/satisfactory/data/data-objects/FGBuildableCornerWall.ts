import { z } from 'zod';
import { booleanString, decimalString } from '../customSchemas.js';
import { customScaleTypeEnum, occlusionShapeEnum } from '../enums.js';

export type FGBuildableCornerWallBag = z.infer<typeof FGBuildableCornerWall.schema>;

export default class FGBuildableCornerWall {
    static get schema() {
        return z.object({
            NativeClass                       : z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildableCornerWall\''),
            ClassName                         : z.string(),
            mSize                             : decimalString,
            mHeight                           : decimalString,
            mIsInverted                       : booleanString,
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

    constructor(data: FGBuildableCornerWallBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
