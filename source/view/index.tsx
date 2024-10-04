import { createRoot } from 'react-dom/client';
import HomePage from './HomePage.js';
import React from 'react';
import library from '../data/library.js';


const oilRecipes = [
    library.createWaterExtractor(1),
    library.createOilExtractor('pure', 2),
    library.create('Fuel', 8),
    library.create('Fuel (Fuel Generator)', 16),

    library.create('Residual Plastic', 4),

    library.createOilExtractor('normal', 2),
    library.create('Plastic', 6),
    library.create('Rubber', 2),
    library.create('Residual Fuel', 1),
    library.create('Residual Fuel', 1, '0.667'),
    library.create('Packaged Fuel', 2),
    library.create('Empty Canister', 2),

];

const naturalResource = [
    library.createMiner('limestone', 'Mk. 2', 'normal', 4),

    library.createMiner('Raw Quartz', 'Mk. 2', 'normal', 2),
    library.createMiner('Raw Quartz', 'Mk. 2', 'normal', 2),

    library.createMiner('Copper Ore', 'Mk. 2', 'normal', 2),
    library.createMiner('Iron Ore', 'Mk. 2', 'normal', 2),

    library.createMiner('Coal', 'Mk. 2', 'pure', 2),
];

const mainRecipes = [
    // Ingots

    library.create('Steel Ingot', 12),
    library.create('Iron Ingot', 31),
    library.create('Copper Ingot', 13),


    // Basic Parts

    library.create('Concrete', 10),
    library.create('Steel Beam', 6),
    library.create('Steel Pipe', 6),

    library.create('Iron Plate', 14),
    library.create('Iron Rod', 14),
    library.create('Alternate: Cast Screw', 24),

    library.create('Copper Sheet', 6),
    library.create('Wire', 18),
    library.create('Cable', 6),

    // library.create('Plastic', 6),
    // library.create('Rubber', 2),

    library.create('Quartz Crystal', 4),
    library.create('Silica', 2),


    // Intermediate Parts
    library.create('Encased Industrial Beam', 2),
    library.create('Reinforced Iron Plate', 8),
    library.create('Stator', 4),
    library.create('Rotor', 4),
    library.create('Modular Frame', 8),
    library.create('Circuit Board', 2),


    // Complex Parts
    library.create('Motor', 1),
    library.create('Heavy Modular Frame', 1),
    library.create('Crystal Oscillator', 2),
    library.create('Alternate: Crystal Computer', 1),

    // Goal Parts
    library.create('Automated Wiring', 2),
    library.create('Smart Plating'),
    library.create('Adaptive Control Unit'),
    library.create('Modular Engine'),
    library.create('Versatile Framework'),
];


export const start = () => {
    const recipes = [
        ...oilRecipes,
        // ...mainRecipes,
    ];

    document.body.innerHTML = '<div id="main"></div>';

    const rootElement = document.getElementById('main');

    if (rootElement) {
        const root = createRoot(rootElement);

        root.render(<HomePage recipes={recipes}></HomePage>);
    } else {
        throw new Error('somethings has gone horribly wrong.');
    }
};
