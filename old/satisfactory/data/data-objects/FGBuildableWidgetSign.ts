import { z } from 'zod';
import { booleanString, decimalString } from '../customSchemas.js';
import { customScaleTypeEnum, occlusionShapeEnum } from '../enums.js';

export type FGBuildableWidgetSignBag = z.infer<typeof FGBuildableWidgetSign.schema>;

export default class FGBuildableWidgetSign {
    static get schema() {
        return z.object({
            NativeClass                       : z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildableWidgetSign\''),
            ClassName                         : z.string(),
            mGainSignificanceDistance         : decimalString,
            mTextElementToDataMap             : z.string(),
            mIconElementToDataMap             : z.string(),
            mSignDrawSize                     : z.string(),
            mPrefabTextElementSaveData        : z.string(),
            mPrefabIconElementSaveData        : z.string(),
            mForegroundColor                  : z.string(),
            mBackgroundColor                  : z.string(),
            mAuxilaryColor                    : z.string(),
            mEmissive                         : decimalString,
            mGlossiness                       : decimalString,
            mDataVersion                      : z.number({ coerce: true }),
            mSignPoles                        : z.string(),
            mWorldDimensions                  : z.string(),
            mPoleOffset                       : z.string(),
            mPoleScale                        : z.string(),
            mSignToSignOffset                 : decimalString,
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

    constructor(data: FGBuildableWidgetSignBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
