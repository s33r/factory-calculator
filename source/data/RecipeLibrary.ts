import { Decimal } from 'decimal.js';
import type { RecipeArgs, RecipeBag } from '../Recipe.js';
import Recipe from '../Recipe.js';
import type { RawValue } from '../UnitValue.js';
import UnitValue from '../UnitValue.js';
import { hasItem } from './store.js';

export type MinerLevel = 'Mk. 1' | 'Mk. 2' | 'Mk. 3';
export type NodeLevel = 'impure' | 'normal' | 'pure';


const minerMultiplier: Record<MinerLevel, number> = {
    'Mk. 1': 1,
    'Mk. 2': 2,
    'Mk. 3': 4,
};

const nodeMultiplier: Record<NodeLevel, number> = {
    impure: 1,
    normal: 2,
    pure  : 3,
};

const oilNodeMultiplier: Record<NodeLevel, number> = {
    impure: 1,
    normal: 2,
    pure  : 4,
};


export default class RecipeLibrary {
    readonly #data: ReadonlyMap<string, RecipeBag>;

    constructor(data: Array<RecipeArgs | Recipe>) {
        const map = new Map<string, RecipeBag>();

        data.forEach(entry => {
            const recipe = new Recipe(entry);

            recipe.items.forEach(item => {
                if (!hasItem(item.unit)) {
                    throw new Error(`Unknown Item: ${ item.unit } in recipe ${ recipe.name }`);
                }
            });

            if (map.has(recipe.name)) {
                throw new Error(`Already added recipe ${ recipe.name }`);
            } else {
                map.set(recipe.name, Recipe.toBag(recipe));
            }
        });

        this.#data = map;
    }

    create(
        name: string,
        instances = 1,
        efficiency: RawValue = new Decimal(1),
    ): Recipe {
        const template = this.#data.get(name);

        if (template) {
            return new Recipe({
                ...template,
                instances,
                efficiency,
            });
        } else {
            throw new Error(`Unknown recipe ${ name }`);
        }
    }

    // eslint-disable-next-line @typescript-eslint/class-methods-use-this
    createMiner(
        item: string,
        level: MinerLevel,
        purity: NodeLevel,
        instances = 1,
        efficiency: RawValue = 1,
    ): Recipe {
        const amount = new Decimal(30)
            .mul(nodeMultiplier[purity])
            .mul(minerMultiplier[level]);

        return new Recipe({
            name        : `Mine ${ item }`,
            buildingName: `Miner ${ level }`,
            basePower   : -4,
            instances,
            efficiency  : new Decimal(efficiency),
            items       : [new UnitValue([item, amount])],
        });
    }

    // eslint-disable-next-line @typescript-eslint/class-methods-use-this
    createOilExtractor(
        purity: NodeLevel,
        instances = 1,
        efficiency: RawValue = 1,
    ): Recipe {
        const amount = new Decimal(60).mul(oilNodeMultiplier[purity]);

        return new Recipe({
            name        : `Extract Oil (${ purity })`,
            buildingName: 'Oil Extractor',
            basePower   : -20,
            instances,
            efficiency  : new Decimal(efficiency),
            items       : [new UnitValue(['Crude Oil', amount])],
        });
    }

    // eslint-disable-next-line @typescript-eslint/class-methods-use-this
    createWaterExtractor(
        instances = 1,
        efficiency: RawValue = 1,
    ): Recipe {
        return new Recipe({
            name        : 'Pump Water',
            buildingName: 'Water Extractor',
            basePower   : new Decimal(-10),
            instances,
            efficiency  : new Decimal(efficiency),
            items       : [new UnitValue(['Water', 120])],
        });
    }
}
