import React from 'react';
import type Recipe from '../Recipe.js';
import type ReadonlyUnitMap from '../ReadonlyUnitMap.js';

export type RecipeTableParams = {
    recipes: ReadonlyArray<Recipe>;
    name   : string;
};

const getHeaders = (
    recipes: ReadonlyArray<Recipe>,
) => {
    let inputs = 0;
    let outputs = 0;

    recipes.forEach(recipe => {
        if (recipe.outputs.size > outputs) {
            outputs = recipe.outputs.size;
        }

        if (recipe.inputs.size > inputs) {
            inputs = recipe.inputs.size;
        }
    });

    const headers: Array<string> = [];

    for (let j = 0; j < outputs; j++) {
        headers.push(`Output ${ j + 1 } Item`);
        headers.push(`Output ${ j + 1 } Rate`);
    }

    for (let j = 0; j < inputs; j++) {
        headers.push(`Input ${ j + 1 } Item`);
        headers.push(`Input ${ j + 1 } Rate`);
    }

    return headers.map(header => <th>{header}</th>);
};

const renderIoColumns = (
    map: ReadonlyUnitMap,
) => map.map(entry => [
    <td>{entry.unit}</td>,
    <td>{entry.value.toString()}</td>,
]);

const renderRow = (
    recipe: Recipe,
    index: number,
) => <tr className={index % 2 === 0 ? 'even' : 'odd'}>
    <td>{recipe.name}</td>
    <td>{recipe.buildingName}</td>
    <td>{recipe.instances}</td>
    <td>{recipe.efficiency.toString()}</td>
    <td>{recipe.power.toString()}</td>
    {...renderIoColumns(recipe.inputs)}
    {...renderIoColumns(recipe.outputs)}
</tr>;


export default ({ recipes, name }: RecipeTableParams) => <div>
    <h2>{name}</h2>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Building</th>
                <th>Instances</th>
                <th>Efficiency</th>
                <th>Power</th>
            {...getHeaders(recipes)}
            </tr>
        </thead>
        <tbody>
        {...recipes.map(renderRow)}
        </tbody>
    </table>
</div>;
