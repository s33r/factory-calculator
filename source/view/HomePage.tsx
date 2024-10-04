import React from 'react';
import type Recipe from '../Recipe.js';
import RecipeTable from './RecipeTable.js';
import UnitMap from '../UnitMap.js';
import ItemTable from './ItemTable.js';
import { Decimal } from 'decimal.js';

export type HomePageArgs = {
    recipes: ReadonlyArray<Recipe>;
};


export default ({ recipes }: HomePageArgs) => {
    const total = UnitMap.combine(recipes.map(r => r.items));
    const powerConsumption = recipes.reduce((sum, current) => sum.add(current.power), new Decimal(0));

    // recipes.forEach(r => console.log(r.toString()));

    return <div>
        <RecipeTable recipes={recipes} name="Main Factory"></RecipeTable>
        <br/>
        <p>Total Power Consumption: {powerConsumption.toString()}</p>
        <br/>
        <ItemTable values={total}></ItemTable>
    </div>;
};
