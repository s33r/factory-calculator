import type { RecipeArgs } from '../Recipe.js';
import Recipe from '../Recipe.js';
import RecipeLibrary from './RecipeLibrary.js';

export const recipes = [
    new Recipe({
        buildingName: 'Coal Generator',
        name        : 'Coal (Coal Generator)',
        basePower   : 75,
        items       : [
            ['Coal', -15],
            ['Water', -45],
        ],
    }),
    new Recipe({
        buildingName: 'Fuel Generator',
        name        : 'Fuel (Fuel Generator)',
        basePower   : 250,
        items       : [['Fuel', -20]],
    }),
    new Recipe({
        buildingName: 'Constructor',
        name        : 'Concrete',
        basePower   : -4,
        items       : [
            ['Limestone', -45],
            ['Concrete', 15],
        ],
    }),
    new Recipe({
        buildingName: 'Smelter',
        name        : 'Iron Ingot',
        basePower   : -4,
        items       : [
            ['Iron Ore', -30],
            ['Iron Ingot', 30],
        ],
    }),
    new Recipe({
        buildingName: 'Smelter',
        name        : 'Copper Ingot',
        basePower   : -4,
        items       : [
            ['Copper Ore', -30],
            ['Copper Ingot', 30],
        ],
    }),
    new Recipe({
        buildingName: 'Smelter',
        name        : 'Caterium Ingot',
        basePower   : -4,
        items       : [
            ['Caterium Ore', -45],
            ['Caterium Ingot', 15],
        ],
    }),
    new Recipe({
        buildingName: 'Foundry',
        name        : 'Steel Ingot',
        basePower   : -15,
        items       : [
            ['Iron Ore', -45],
            ['Coal', -45],
            ['Steel Ingot', 45],
        ],
    }),
    new Recipe({
        buildingName: 'Foundry',
        name        : 'Alternate: Solid Steel Ingot',
        basePower   : -15,
        items       : [
            ['Iron Ingot', -40],
            ['Coal', -40],
            ['Steel Ingot', 60],
        ],
    }),
    new Recipe({
        buildingName: 'Constructor',
        name        : 'Empty Canister',
        basePower   : -4,
        items       : [
            ['Plastic', -30],
            ['Empty Canister', 60],
        ],
    }),
    new Recipe({
        buildingName: 'Constructor',
        name        : 'Steel Beam',
        basePower   : -4,
        items       : [
            ['Steel Ingot', -60],
            ['Steel Beam', 15],
        ],
    }),
    new Recipe({
        buildingName: 'Constructor',
        name        : 'Steel Pipe',
        basePower   : -4,
        items       : [
            ['Steel Ingot', -30],
            ['Steel Pipe', 20],
        ],
    }),
    new Recipe({
        buildingName: 'Constructor',
        name        : 'Iron Plate',
        basePower   : -4,
        items       : [
            ['Iron Ingot', -30],
            ['Iron Plate', 20],
        ],
    }),
    new Recipe({
        buildingName: 'Constructor',
        name        : 'Iron Rod',
        basePower   : -4,
        items       : [
            ['Iron Ingot', -15],
            ['Iron Rod', 15],
        ],
    }),
    new Recipe({
        buildingName: 'Constructor',
        name        : 'Screw',
        basePower   : -4,
        items       : [
            ['Iron Rod', -10],
            ['Screw', 40],
        ],
    }),
    new Recipe({
        buildingName: 'Constructor',
        name        : 'Alternate: Cast Screw',
        basePower   : -4,
        items       : [
            ['Iron Ingot', -12.5],
            ['Screw', 50],
        ],
    }),
    new Recipe({
        buildingName: 'Constructor',
        name        : 'Quickwire',
        basePower   : -4,
        items       : [
            ['Caterium Ingot', -12],
            ['Quickwire', 60],
        ],
    }),
    new Recipe({
        buildingName: 'Constructor',
        name        : 'Reanimated SAM',
        basePower   : -4,
        items       : [
            ['SAM', -120],
            ['Reanimated SAM', 30],
        ],
    }),
    new Recipe({
        buildingName: 'Constructor',
        name        : 'Quartz Crystal',
        basePower   : -4,
        items       : [
            ['Raw Quartz', -37.5],
            ['Quartz Crystal', 22.5],
        ],
    }),
    new Recipe({
        buildingName: 'Constructor',
        name        : 'Silica',
        basePower   : -4,
        items       : [
            ['Raw Quartz', -22.5],
            ['Silica', 37.5],
        ],
    }),
    new Recipe({
        buildingName: 'Constructor',
        name        : 'Copper Sheet',
        basePower   : -4,
        items       : [
            ['Copper Ingot', -20],
            ['Copper Sheet', 10],
        ],
    }),
    new Recipe({
        buildingName: 'Constructor',
        name        : 'Wire',
        basePower   : -4,
        items       : [
            ['Copper Ingot', -15],
            ['Wire', 30],
        ],
    }),
    new Recipe({
        buildingName: 'Constructor',
        name        : 'Cable',
        basePower   : -4,
        items       : [
            ['Wire', -60],
            ['Cable', 30],
        ],
    }),
    new Recipe({
        buildingName: 'Assembler',
        name        : 'AI Limiter',
        basePower   : -15,
        items       : [
            ['Copper Sheet', -100],
            ['Quickwire', -25],
            ['AI Limiter', 5],
        ],
    }),
    new Recipe({
        buildingName: 'Assembler',
        name        : 'Reinforced Iron Plate',
        basePower   : -15,
        items       : [
            ['Iron Plate', -30],
            ['Screw', -60],
            ['Reinforced Iron Plate', 5],
        ],
    }),
    new Recipe({
        buildingName: 'Assembler',
        name        : 'Modular Frame',
        basePower   : -15,
        items       : [
            ['Reinforced Iron Plate', -3],
            ['Iron Rod', -12],
            ['Modular Frame', 2],
        ],
    }),
    new Recipe({
        buildingName: 'Assembler',
        name        : 'Rotor',
        basePower   : -15,
        items       : [
            ['Screw', -100],
            ['Iron Rod', -20],
            ['Rotor', 4],
        ],
    }),
    new Recipe({
        buildingName: 'Assembler',
        name        : 'Smart Plating',
        basePower   : -15,
        items       : [
            ['Reinforced Iron Plate', -2],
            ['Rotor', -2],
            ['Smart Plating', 2],
        ],
    }),
    new Recipe({
        buildingName: 'Assembler',
        name        : 'Versatile Framework',
        basePower   : -15,
        items       : [
            ['Modular Frame', -2.5],
            ['Steel Beam', -30],
            ['Versatile Framework', 5],
        ],
    }),
    new Recipe({
        buildingName: 'Assembler',
        name        : 'Automated Wiring',
        basePower   : -15,
        items       : [
            ['Cable', -50],
            ['Stator', -2.5],
            ['Automated Wiring', 2.5],
        ],
    }),
    new Recipe({
        buildingName: 'Assembler',
        name        : 'Encased Industrial Beam',
        basePower   : -15,
        items       : [
            ['Steel Beam', -18],
            ['Concrete', -36],
            ['Encased Industrial Beam', 6],
        ],
    }),
    new Recipe({
        buildingName: 'Assembler',
        name        : 'Motor',
        basePower   : -15,
        items       : [
            ['Stator', -10],
            ['Rotor', -10],
            ['Motor', 5],
        ],
    }),
    new Recipe({
        buildingName: 'Assembler',
        name        : 'Stator',
        basePower   : -15,
        items       : [
            ['Wire', -40],
            ['Steel Pipe', -15],
            ['Stator', 5],
        ],
    }),
    new Recipe({
        buildingName: 'Assembler',
        name        : 'Circuit Board',
        basePower   : -15,
        items       : [
            ['Plastic', -30],
            ['Copper Sheet', -15],
            ['Circuit Board', 7.5],
        ],
    }),
    new Recipe({
        buildingName: 'Assembler',
        name        : 'Alternate: Quickwire Stator',
        basePower   : -15,
        items       : [
            ['Quickwire', -60],
            ['Steel Pipe', -16],
            ['Stator', 8],
        ],
    }),
    new Recipe({
        buildingName: 'Assembler',
        name        : 'Alternate: Crystal Computer',
        basePower   : -15,
        items       : [
            ['Circuit Board', -5],
            ['Crystal Oscillator', -1.167],
            ['Plastic', -40],
            ['Computer', 3.33],
        ],
    }),
    new Recipe({
        buildingName: 'Manufacturer',
        name        : 'Heavy Modular Frame',
        basePower   : -55,
        items       : [
            ['Modular Frame', -10],
            ['Steel Pipe', -40],
            ['Encased Industrial Beam', -10],
            ['Screw', -240],
            ['Heavy Modular Frame', 2],
        ],
    }),
    new Recipe({
        buildingName: 'Manufacturer',
        name        : 'SAM Fluctuator',
        basePower   : -55,
        items       : [
            ['Reanimated SAM', -60],
            ['Wire', -50],
            ['Steel Pipe', -30],
            ['SAM Fluctuator', 10],
        ],
    }),
    new Recipe({
        buildingName: 'Manufacturer',
        name        : 'Computer',
        basePower   : -55,
        items       : [
            ['Circuit Board', -10],
            ['Cable', -20],
            ['Plastic', -40],
            ['Computer', 2.5],
        ],
    }),
    new Recipe({
        buildingName: 'Manufacturer',
        name        : 'Crystal Oscillator',
        basePower   : -55,
        items       : [
            ['Quartz Crystal', -18],
            ['Cable', -14],
            ['Reinforced Iron Plate', -2.5],
            ['Crystal Oscillator', 1],
        ],
    }),
    new Recipe({
        buildingName: 'Manufacturer',
        name        : 'Modular Engine',
        basePower   : -55,
        items       : [
            ['Motor', -2],
            ['Rubber', -15],
            ['Smart Plating', -2],
            ['Modular Engine', 2],
        ],
    }),
    new Recipe({
        buildingName: 'Manufacturer',
        name        : 'Adaptive Control Unit',
        basePower   : -55,
        items       : [
            ['Automated Wiring', -5],
            ['Circuit Board', -5],
            ['Heavy Modular Frame', -1],
            ['Computer', -2],
            ['Adaptive Control Unit', 1],
        ],
    }),
    new Recipe({
        buildingName: 'Refinery',
        name        : 'Fuel',
        basePower   : -30,
        items       : [
            ['Crude Oil', -60],
            ['Fuel', 40],
            ['Polymer Resin', 30],
        ],
    }),
    new Recipe({
        buildingName: 'Refinery',
        name        : 'Plastic',
        basePower   : -30,
        items       : [
            ['Crude Oil', -30],
            ['Plastic', 20],
            ['Heavy Oil Residue', 10],
        ],
    }),
    new Recipe({
        buildingName: 'Refinery',
        name        : 'Residual Plastic',
        basePower   : -30,
        items       : [
            ['Polymer Resin', -60],
            ['Water', -20],
            ['Plastic', 20],
        ],
    }),
    new Recipe({
        buildingName: 'Refinery',
        name        : 'Residual Rubber',
        basePower   : -30,
        items       : [
            ['Polymer Resin', -40],
            ['Water', -40],
            ['Rubber', 20],
        ],
    }),
    new Recipe({
        buildingName: 'Refinery',
        name        : 'Rubber',
        basePower   : -30,
        items       : [
            ['Crude Oil', -30],
            ['Rubber', 20],
            ['Heavy Oil Residue', 20],
        ],
    }),
    new Recipe({
        buildingName: 'Refinery',
        name        : 'Residual Fuel',
        basePower   : -30,
        items       : [
            ['Heavy Oil Residue', -60],
            ['Fuel', 40],
        ],
    }),
    new Recipe({
        buildingName: 'Refinery',
        name        : 'Petroleum Coke',
        basePower   : -30,
        items       : [
            ['Heavy Oil Residue', -40],
            ['Petroleum Coke', 120],
        ],
    }),
    new Recipe({
        buildingName: 'Packager',
        name        : 'Packaged Fuel',
        basePower   : -10,
        items       : [
            ['Empty Canister', -40],
            ['Fuel', -40],
            ['Packaged Fuel', 40],
        ],
    }),

] satisfies Array<RecipeArgs | Recipe>;

export default new RecipeLibrary(recipes);
