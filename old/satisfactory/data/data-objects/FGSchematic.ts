import { z } from 'zod';
import { booleanString, decimalString } from '../customSchemas.js';
import { gamePhaseEnum, includeInBuildsEnum, schematicTypeEnum } from '../enums.js';

export type FGSchematicBag = z.infer<typeof FGSchematic.schema>;


export default class FGSchematic {
    static get schema() {
        return z.object({
            NativeClass            : z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGSchematic\''),
            ClassName              : z.string(),
            FullName               : z.string(),
            mType                  : schematicTypeEnum,
            mUnlockName            : z.string().optional(),
            mUnlockDescription     : z.string().optional(),
            mUnlockIconBig         : z.string().optional(),
            mUnlockIconSmall       : z.string().optional(),
            mUnlockIconCategory    : z.string().optional(),
            mDisplayName           : z.string(),
            mDescription           : z.string(),
            mSubCategories         : z.string(),
            mMenuPriority          : decimalString,
            mTechTier              : z.number({ coerce: true }),
            mCost                  : z.string(),
            mTimeToComplete        : decimalString,
            mRelevantShopSchematics: z.string(),
            mIsPlayerSpecific      : booleanString,
            mSchematicIcon         : z.string(),
            mSmallSchematicIcon    : z.string(),
            mSchematicDependencies : z.array(z.object({
                Class                             : z.string(),
                mGamePhase                        : gamePhaseEnum.optional(),
                mSchematics                       : z.string().optional(),
                mRequireAllSchematicsToBePurchased: booleanString.optional(),
            }).strict()),
            mUnlocks: z.array(z.object({
                Class                        : z.string(),
                mRecipes                     : z.string().optional(),
                mResourcesToAddToScanner     : z.string().optional(),
                mResourcePairsToAddToScanner : z.string().optional(),
                mEmotes                      : z.string().optional(),
                mSchematics                  : z.string().optional(),
                mTapeUnlocks                 : z.string().optional(),
                mItemsToGive                 : z.string().optional(),
                mScannableObjects            : z.string().optional(),
                mNumArmEquipmentSlotsToUnlock: z.number({ coerce: true }).optional(),
                mNumInventorySlotsToUnlock   : z.number({ coerce: true }).optional(),
            }).strict()),
            mDependenciesBlocksSchematicAccess: booleanString,
            mHiddenUntilDependenciesMet       : booleanString,
            mRelevantEvents                   : z.string(),
            mIncludeInBuilds                  : includeInBuildsEnum,
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGSchematicBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
