import { z } from 'zod';

export const stackSizeEnum = z.enum([
    'SS_HUGE',
    'SS_BIG',
    'SS_MEDIUM',
    'SS_SMALL',
    'SS_ONE',
    'SS_FLUID',
]);

export const formEnum = z.enum([
    'RF_SOLID',
    'RF_LIQUID',
    'RF_INVALID',
    'RF_GAS',
]);
export const scannableTypeEnum = z.enum(['RTWOT_Default', 'RTWOT_WeakSignal']);
export const dockableStatesEnum = z.enum(['DS_UNDOCKED']);
export const itemTransferEnum = z.enum(['ITS_NONE']);
export const occlusionShapeEnum = z.enum(['ROCS_Box', 'ROCS_Ramp', 'ROCS_CornerRamp']);
export const customScaleTypeEnum = z.enum(['ROCSS_Center']);
export const schematicTypeEnum = z.enum([
    'EST_Custom',
    'EST_ResourceSink',
    'EST_Milestone',
    'EST_Alternate',
    'EST_MAM',
    'EST_Tutorial',
    'EST_HardDrive',
]);
export const includeInBuildsEnum = z.enum(['IIB_PublicBuilds']);
export const gamePhaseEnum = z.enum(['EGP_FoodCourt']);

export const wallTypeEnum = z.enum([
    'BWT_Normal',
    'BWT_Glass',
    'BWT_Frame',
    'BWT_DiagonalDown',
    'BWT_DiagonalUp',
]);

export const easingFunctionEnum = z.enum(['ExpoInOut', 'Linear']);

export const powerPoleTypeEnum = z.enum([
    'PPT_POLE',
    'PPT_WALL',
    'PPT_TOWER',
    'PPT_WALL_DOUBLE',
]);
