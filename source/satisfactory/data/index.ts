import { z } from 'zod';
import FGItemDescriptor from './data-objects/FGItemDescriptor.js';
import FGBuildableDroneStation from './data-objects/FGBuildableDroneStation.js';
import FGAmmoTypeInstantHit from './data-objects/FGAmmoTypeInstantHit.js';
import FGAmmoTypeProjectile from './data-objects/FGAmmoTypeProjectile.js';
import FGAmmoTypeSpreadshot from './data-objects/FGAmmoTypeSpreadshot.js';
import FGBuildable from './data-objects/FGBuildable.js';
import FGBuildableAttachmentMerger from './data-objects/FGBuildableAttachmentMerger.js';
import FGBuildableAttachmentSplitter from './data-objects/FGBuildableAttachmentSplitter.js';
import FGBuildableBeamLightweight from './data-objects/FGBuildableBeamLightweight.js';
import FGBuildableBlueprintDesigner from './data-objects/FGBuildableBlueprintDesigner.js';
import FGBuildableCircuitSwitch from './data-objects/FGBuildableCircuitSwitch.js';
import FGBuildableConveyorBelt from './data-objects/FGBuildableConveyorBelt.js';
import FGBuildableConveyorLift from './data-objects/FGBuildableConveyorLift.js';
import FGBuildableCornerWall from './data-objects/FGBuildableCornerWall.js';
import FGBuildableDockingStation from './data-objects/FGBuildableDockingStation.js';
import FGBuildableDoor from './data-objects/FGBuildableDoor.js';
import FGBuildableFactory from './data-objects/FGBuildableFactory.js';
import FGBuildableFactoryBuilding from './data-objects/FGBuildableFactoryBuilding.js';
import FGBuildableFactorySimpleProducer from './data-objects/FGBuildableFactorySimpleProducer.js';
import FGBuildableFloodlight from './data-objects/FGBuildableFloodlight.js';
import FGBuildableFoundation from './data-objects/FGBuildableFoundation.js';
import FGBuildableFoundationLightweight from './data-objects/FGBuildableFoundationLightweight.js';
import FGBuildableFrackingActivator from './data-objects/FGBuildableFrackingActivator.js';
import FGBuildableFrackingExtractor from './data-objects/FGBuildableFrackingExtractor.js';
import FGBuildableGeneratorFuel from './data-objects/FGBuildableGeneratorFuel.js';
import FGBuildableGeneratorGeoThermal from './data-objects/FGBuildableGeneratorGeoThermal.js';
import FGBuildableGeneratorNuclear from './data-objects/FGBuildableGeneratorNuclear.js';
import FGBuildableJumppad from './data-objects/FGBuildableJumppad.js';
import FGBuildableLadder from './data-objects/FGBuildableLadder.js';
import FGBuildableLightsControlPanel from './data-objects/FGBuildableLightsControlPanel.js';
import FGBuildableLightSource from './data-objects/FGBuildableLightSource.js';
import FGBuildableMAM from './data-objects/FGBuildableMAM.js';
import FGBuildableManufacturer from './data-objects/FGBuildableManufacturer.js';
import FGBuildableManufacturerVariablePower from './data-objects/FGBuildableManufacturerVariablePower.js';
import FGBuildablePassthrough from './data-objects/FGBuildablePassthrough.js';
import FGBuildablePassthroughPipeHyper from './data-objects/FGBuildablePassthroughPipeHyper.js';
import FGBuildablePillarLightweight from './data-objects/FGBuildablePillarLightweight.js';
import FGBuildablePipeHyper from './data-objects/FGBuildablePipeHyper.js';
import FGBuildablePipeline from './data-objects/FGBuildablePipeline.js';
import FGBuildablePipelineJunction from './data-objects/FGBuildablePipelineJunction.js';
import FGBuildablePipelinePump from './data-objects/FGBuildablePipelinePump.js';
import FGBuildablePipelineSupport from './data-objects/FGBuildablePipelineSupport.js';
import FGBuildablePipeReservoir from './data-objects/FGBuildablePipeReservoir.js';
import FGBuildablePoleLightweight from './data-objects/FGBuildablePoleLightweight.js';
import FGBuildablePowerPole from './data-objects/FGBuildablePowerPole.js';
import FGBuildablePowerStorage from './data-objects/FGBuildablePowerStorage.js';
import FGBuildablePriorityPowerSwitch from './data-objects/FGBuildablePriorityPowerSwitch.js';
import FGBuildableRadarTower from './data-objects/FGBuildableRadarTower.js';
import FGBuildableRailroadSignal from './data-objects/FGBuildableRailroadSignal.js';
import FGBuildableRailroadStation from './data-objects/FGBuildableRailroadStation.js';
import FGBuildableRailroadTrack from './data-objects/FGBuildableRailroadTrack.js';
import FGBuildableRamp from './data-objects/FGBuildableRamp.js';
import FGBuildableResourceExtractor from './data-objects/FGBuildableResourceExtractor.js';
import FGBuildableResourceSink from './data-objects/FGBuildableResourceSink.js';
import FGBuildableResourceSinkShop from './data-objects/FGBuildableResourceSinkShop.js';
import FGBuildableSnowDispenser from './data-objects/FGBuildableSnowDispenser.js';
import FGBuildableSpaceElevator from './data-objects/FGBuildableSpaceElevator.js';
import FGBuildableSplitterSmart from './data-objects/FGBuildableSplitterSmart.js';
import FGBuildableStair from './data-objects/FGBuildableStair.js';
import FGBuildableStorage from './data-objects/FGBuildableStorage.js';
import FGBuildableTradingPost from './data-objects/FGBuildableTradingPost.js';
import FGBuildableTrainPlatformCargo from './data-objects/FGBuildableTrainPlatformCargo.js';
import FGBuildableTrainPlatformEmpty from './data-objects/FGBuildableTrainPlatformEmpty.js';
import FGBuildableWalkway from './data-objects/FGBuildableWalkway.js';
import FGBuildableWalkwayLightweight from './data-objects/FGBuildableWalkwayLightweight.js';
import FGBuildableWall from './data-objects/FGBuildableWall.js';
import FGBuildableWallLightweight from './data-objects/FGBuildableWallLightweight.js';
import FGBuildableWaterPump from './data-objects/FGBuildableWaterPump.js';
import FGBuildableWidgetSign from './data-objects/FGBuildableWidgetSign.js';
import FGBuildableWire from './data-objects/FGBuildableWire.js';
import FGBuildingDescriptor from './data-objects/FGBuildingDescriptor.js';
import FGChainsaw from './data-objects/FGChainsaw.js';
import FGChargedWeapon from './data-objects/FGChargedWeapon.js';
import FGConsumableDescriptor from './data-objects/FGConsumableDescriptor.js';
import FGConsumableEquipment from './data-objects/FGConsumableEquipment.js';
import FGConveyorPoleStackable from './data-objects/FGConveyorPoleStackable.js';
import FGCustomizationRecipe from './data-objects/FGCustomizationRecipe.js';
import FGEquipmentDescriptor from './data-objects/FGEquipmentDescriptor.js';
import FGEquipmentStunSpear from './data-objects/FGEquipmentStunSpear.js';
import FGEquipmentZipline from './data-objects/FGEquipmentZipline.js';
import FGGasMask from './data-objects/FGGasMask.js';
import FGGolfCartDispenser from './data-objects/FGGolfCartDispenser.js';
import FGHoverPack from './data-objects/FGHoverPack.js';
import FGItemDescriptorBiomass from './data-objects/FGItemDescriptorBiomass.js';
import FGItemDescriptorNuclearFuel from './data-objects/FGItemDescriptorNuclearFuel.js';
import FGJetPack from './data-objects/FGJetPack.js';
import FGJumpingStilts from './data-objects/FGJumpingStilts.js';
import FGObjectScanner from './data-objects/FGObjectScanner.js';
import FGParachute from './data-objects/FGParachute.js';
import FGPipeHyperStart from './data-objects/FGPipeHyperStart.js';
import FGPoleDescriptor from './data-objects/FGPoleDescriptor.js';
import FGPortableMinerDispenser from './data-objects/FGPortableMinerDispenser.js';
import FGRecipe from './data-objects/FGRecipe.js';
import FGResourceDescriptor from './data-objects/FGResourceDescriptor.js';
import FGSchematic from './data-objects/FGSchematic.js';
import FGSuitBase from './data-objects/FGSuitBase.js';
import FGVehicleDescriptor from './data-objects/FGVehicleDescriptor.js';
import FGWeapon from './data-objects/FGWeapon.js';

export type Phase2Data = z.infer<typeof dataSchema>;

export const dataSchema = z.discriminatedUnion('NativeClass', [
    FGBuildableBlueprintDesigner.schema,
    FGBuildableCornerWall.schema,
    FGBuildableDoor.schema,
    FGBuildableDroneStation.schema,
    FGBuildableWall.schema,
    FGBuildableWallLightweight.schema,
    FGBuildingDescriptor.schema,
    FGCustomizationRecipe.schema,
    FGItemDescriptor.schema,
    FGRecipe.schema,
    FGResourceDescriptor.schema,
    FGSchematic.schema,

    FGAmmoTypeInstantHit.schema,
    FGAmmoTypeProjectile.schema,
    FGAmmoTypeSpreadshot.schema,
    FGBuildable.schema,
    FGBuildableAttachmentMerger.schema,
    FGBuildableAttachmentSplitter.schema,
    FGBuildableBeamLightweight.schema,
    FGBuildableCircuitSwitch.schema,
    FGBuildableConveyorBelt.schema,
    FGBuildableConveyorLift.schema,
    FGBuildableDockingStation.schema,
    FGBuildableFactory.schema,
    FGBuildableFactoryBuilding.schema,
    FGBuildableFactorySimpleProducer.schema,
    FGBuildableFloodlight.schema,
    FGBuildableFoundation.schema,
    FGBuildableFoundationLightweight.schema,
    FGBuildableFrackingActivator.schema,
    FGBuildableFrackingExtractor.schema,
    FGBuildableGeneratorFuel.schema,
    FGBuildableGeneratorGeoThermal.schema,
    FGBuildableGeneratorNuclear.schema,
    FGBuildableJumppad.schema,
    FGBuildableLadder.schema,
    FGBuildableLightsControlPanel.schema,
    FGBuildableLightSource.schema,
    FGBuildableMAM.schema,
    FGBuildableManufacturer.schema,
    FGBuildableManufacturerVariablePower.schema,
    FGBuildablePassthrough.schema,
    FGBuildablePassthroughPipeHyper.schema,
    FGBuildablePillarLightweight.schema,
    FGBuildablePipeHyper.schema,
    FGBuildablePipeline.schema,
    FGBuildablePipelineJunction.schema,
    FGBuildablePipelinePump.schema,
    FGBuildablePipelineSupport.schema,
    FGBuildablePipeReservoir.schema,
    FGBuildablePoleLightweight.schema,
    FGBuildablePowerPole.schema,
    FGBuildablePowerStorage.schema,
    FGBuildablePriorityPowerSwitch.schema,
    FGBuildableRadarTower.schema,
    FGBuildableRailroadSignal.schema,
    FGBuildableRailroadStation.schema,
    FGBuildableRailroadTrack.schema,
    FGBuildableRamp.schema,
    FGBuildableResourceExtractor.schema,
    FGBuildableResourceSink.schema,
    FGBuildableResourceSinkShop.schema,
    FGBuildableSnowDispenser.schema,
    FGBuildableSpaceElevator.schema,
    FGBuildableSplitterSmart.schema,
    FGBuildableStair.schema,
    FGBuildableStorage.schema,
    FGBuildableTradingPost.schema,
    FGBuildableTrainPlatformCargo.schema,
    FGBuildableTrainPlatformEmpty.schema,
    FGBuildableWalkway.schema,
    FGBuildableWalkwayLightweight.schema,
    FGBuildableWaterPump.schema,
    FGBuildableWidgetSign.schema,
    FGBuildableWire.schema,
    FGChainsaw.schema,
    FGChargedWeapon.schema,
    FGConsumableDescriptor.schema,
    FGConsumableEquipment.schema,
    FGConveyorPoleStackable.schema,
    FGEquipmentDescriptor.schema,
    FGEquipmentStunSpear.schema,
    FGEquipmentZipline.schema,
    FGGasMask.schema,
    FGGolfCartDispenser.schema,
    FGHoverPack.schema,
    FGItemDescriptorBiomass.schema,
    FGItemDescriptorNuclearFuel.schema,
    FGJetPack.schema,
    FGJumpingStilts.schema,
    FGObjectScanner.schema,
    FGParachute.schema,
    FGPipeHyperStart.schema,
    FGPoleDescriptor.schema,
    FGPortableMinerDispenser.schema,
    FGSuitBase.schema,
    FGVehicleDescriptor.schema,
    FGWeapon.schema,
]);
