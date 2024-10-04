import { z } from 'zod';
import { booleanString, decimalString } from '../customSchemas.js';
import { customScaleTypeEnum, occlusionShapeEnum } from '../enums.js';

export type FGBuildableBlueprintDesignerBag = z.infer<typeof FGBuildableBlueprintDesigner.schema>;

export default class FGBuildableBlueprintDesigner {
    static get schema() {
        return z.object({
            NativeClass                       : z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildableBlueprintDesigner\''),
            ClassName                         : z.string(),
            mTerminalDistanceFromEdge         : decimalString,
            mTerminalHalfDepth                : decimalString,
            mDimensions                       : z.string(), // '(X=4,Y=4,Z=4)',
            OnRecordDataChanged               : z.string(),
            OnBlueprintCostChanged            : z.string(),
            mCurrentCost                      : z.string(),
            mBuildables                       : z.string(),
            mIntersectComponents              : z.string(),
            mCurrentRecordData                : z.string(),
            mIsDismantlingAll                 : booleanString,
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

    constructor(data: FGBuildableBlueprintDesignerBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
