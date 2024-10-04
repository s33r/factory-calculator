/* eslint-disable camelcase */
import { z } from 'zod';
import {
    customScaleTypeEnum, dockableStatesEnum, itemTransferEnum, occlusionShapeEnum, stackSizeEnum,
} from '../enums.js';
import { booleanString, decimalString } from '../customSchemas.js';

export type FGBuildableDroneStationBag = z.infer<typeof FGBuildableDroneStation.schema>;

export default class FGBuildableDroneStation {
    static get schema() {
        return z.object({
            NativeClass                                   : z.literal('/Script/CoreUObject.Class\'/Script/FactoryGame.FGBuildableDroneStation\''),
            ClassName                                     : z.string(),
            mStoppedProducingAnimationSounds              : booleanString,
            mStoppedAkComponents                          : z.string(),
            mSocketStoppedAkComponents                    : z.string(),
            m_DockingStates                               : dockableStatesEnum,
            m_OffsetTime                                  : decimalString,
            mDroneDockingStartLocationLocal               : z.string(), // Vector3 => '(X=-800.000000,Y=0.000000,Z=860.000000)',
            mDroneDockingLocationLocal                    : z.string(), // Vector3 => '(X=-800.000000,Y=0.000000,Z=860.000000)',
            mBatteryClasses                               : z.string(),
            mDroneDockingQueue                            : z.string(),
            mStationHasDronesInQueue                      : booleanString,
            mItemTransferringStage                        : itemTransferEnum,
            mTransferProgress                             : decimalString,
            mTransferSpeed                                : decimalString,
            mStackTransferSize                            : decimalString,
            mDroneQueueRadius                             : decimalString,
            mDroneQueueSeparationRadius                   : decimalString,
            mDroneQueueVerticalSeparation                 : decimalString,
            mTripPowerCost                                : decimalString,
            mTripPowerPerMeterCost                        : decimalString,
            mTripInformationSampleCount                   : decimalString,
            mStorageSizeX                                 : decimalString,
            mStorageSizeY                                 : decimalString,
            mBatteryStorageSizeX                          : decimalString,
            mBatteryStorageSizeY                          : decimalString,
            mInputInventoryHandler                        : z.string(),
            mOutputInventoryHandler                       : z.string(),
            mBatteryInventoryHandler                      : z.string(),
            mMapText                                      : z.string(),
            mPowerConsumption                             : decimalString,
            mPowerConsumptionExponent                     : decimalString,
            mDoesHaveShutdownAnimation                    : booleanString,
            mOnHasPowerChanged                            : z.string(),
            mOnHasProductionChanged                       : z.string(),
            mOnHasStandbyChanged                          : z.string(),
            mMinimumProducingTime                         : decimalString,
            mMinimumStoppedTime                           : decimalString,
            mCanEverMonitorProductivity                   : booleanString,
            mCanChangePotential                           : booleanString,
            mMinPotential                                 : decimalString,
            mMaxPotential                                 : decimalString,
            mMaxPotentialIncreasePerCrystal               : decimalString,
            mFluidStackSizeDefault                        : stackSizeEnum,
            mFluidStackSizeMultiplier                     : decimalString,
            OnReplicationDetailActorCreatedEvent          : z.string(),
            mInventoryPotentialHandlerData                : z.string(),
            mEffectUpdateInterval                         : decimalString,
            mDefaultProductivityMeasurementDuration       : decimalString,
            mLastProductivityMeasurementProduceDuration   : decimalString,
            mLastProductivityMeasurementDuration          : decimalString,
            mCurrentProductivityMeasurementProduceDuration: decimalString,
            mCurrentProductivityMeasurementDuration       : decimalString,
            mProductivityMonitorEnabled                   : booleanString,
            mCachedSkeletalMeshes                         : z.string(),
            mAddToSignificanceManager                     : booleanString,
            mSignificanceRange                            : decimalString,
            mTickExponent                                 : decimalString,
            mDisplayName                                  : z.string(),
            mDescription                                  : z.string(),
            MaxRenderDistance                             : decimalString,
            mAlternativeMaterialRecipes                   : z.string(),
            mContainsComponents                           : booleanString,
            mIsConsideredForBaseWeightValue               : decimalString,
            mBuildEffectSpeed                             : decimalString,
            mAllowColoring                                : booleanString,
            mAllowPatterning                              : booleanString,
            mSkipBuildEffect                              : booleanString,
            mForceNetUpdateOnRegisterPlayer               : booleanString,
            mToggleDormancyOnInteraction                  : booleanString,
            mIsMultiSpawnedBuildable                      : booleanString,
            mShouldShowAttachmentPointVisuals             : booleanString,
            mCreateClearanceMeshRepresentation            : booleanString,
            mCanContainLightweightInstances               : booleanString,
            mAffectsOcclusion                             : booleanString,
            mOcclusionShape                               : occlusionShapeEnum,
            mScaleCustomOffset                            : decimalString,
            mCustomScaleType                              : customScaleTypeEnum,
            mOcclusionBoxInfo                             : z.string(),
            mAttachmentPoints                             : z.string(),
            mInteractingPlayers                           : z.string(),
            mIsUseable                                    : booleanString,
            mHideOnBuildEffectStart                       : booleanString,
            mShouldModifyWorldGrid                        : booleanString,
            mBlueprintBuildEffectID                       : decimalString,
        }).strict();
    }

    readonly #nativeClass: string;
    readonly #className  : string;

    constructor(data: FGBuildableDroneStationBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
