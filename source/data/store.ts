import { toKebabCase } from '../util.js';


export const itemList: ReadonlyArray<string> = Object.freeze([
    'Water',
    'Iron Ore',
    'Iron Ingot',
    'Copper Ore',
    'Copper Ingot',
    'Caterium Ore',
    'Caterium Ingot',
    'Steel Ingot',
    'Iron Plate',
    'Iron Rod',
    'Screw',
].map(toKebabCase) satisfies Array<string>);

const itemSet = new Set(itemList);


export const hasItem = (
    value: string,
) => true;// itemSet.has(toKebabCase(value));
