import { Decimal } from 'decimal.js';
import { z } from 'zod';
import UnitValue from './UnitValue.js';
import UnitMap from './UnitMap.js';
import ReadonlyUnitMap from './ReadonlyUnitMap.js';

export type RecipeBag = z.infer<typeof Recipe.bagSchema>;
export type RecipeTuple = z.infer<typeof Recipe.tupleSchema>;
export type RecipeArgs = z.infer<typeof Recipe.schema>;

export default class Recipe {
    static get schema() {
        return this.bagSchema.or(this.tupleSchema);
    }

    static get bagSchema() {
        return z.object({
            name        : z.string(),
            buildingName: z.string(),
            basePower   : z.instanceof(Decimal).or(z.number()).or(z.string()),
            instances   : z.number().optional(),
            efficiency  : z.instanceof(Decimal).or(z.number()).or(z.string()).optional(),
            items       : z.array(UnitValue.schema.or(z.instanceof(UnitValue))).or(z.instanceof(UnitMap)),
        });
    }


    static get tupleSchema() {
        return z.tuple([
            z.string(), // 0 Item Name
            z.string(), // 1 Building Name
            z.instanceof(Decimal).or(z.number()).or(z.string()), // 2 Base Power
            z.array(UnitValue.schema.or(z.instanceof(UnitValue))).or(z.instanceof(UnitMap)), // 3 Items
        ]).or(z.tuple([
            z.string(), // 0 Item Name
            z.string(), // 1 Building Name
            z.instanceof(Decimal).or(z.number()).or(z.string()), // 2 Base Power
            z.array(UnitValue.schema.or(z.instanceof(UnitValue))).or(z.instanceof(UnitMap)), // 3 Items
            z.number(), // 4 Instances
        ])).or(z.tuple([
            z.string(), // 0 Item Name
            z.string(), // 1 Building Name
            z.instanceof(Decimal).or(z.number()).or(z.string()), // 2 Base Power
            z.array(UnitValue.schema.or(z.instanceof(UnitValue))).or(z.instanceof(UnitMap)), // 3 Items
            z.number(), // 4 Instances
            z.instanceof(Decimal).or(z.number()).or(z.string()), // 5 Efficiency
        ]));
    }

    static toBag(
        recipe: Recipe,
    ): RecipeBag {
        return {
            name        : recipe.name,
            buildingName: recipe.buildingName,
            basePower   : recipe.basePower,
            instances   : recipe.instances,
            efficiency  : recipe.efficiency,
            items       : Array.from(recipe.items.entries()),
        };
    }

    readonly #name        : string;
    readonly #buildingName: string;
    readonly #basePower   : Decimal;
    readonly #power       : Decimal;
    readonly #instances   : number;
    readonly #efficiency  : Decimal;

    readonly #items  : ReadonlyUnitMap;
    readonly #inputs : ReadonlyUnitMap;
    readonly #outputs: ReadonlyUnitMap;

    constructor(data: RecipeArgs | Recipe) {
        let items: UnitMap;

        if (Array.isArray(data)) {
            this.#name = data[0];
            this.#buildingName = data[1];
            this.#basePower = new Decimal(data[2]);
            this.#instances = data[4] ?? 1;
            this.#efficiency = new Decimal(data[5] ?? 1);

            this.#power = this.#basePower.mul(this.instances);
            items = new UnitMap(data[3]).scale(this.instances).scale(this.efficiency);
        } else {
            this.#name = data.name;
            this.#buildingName = data.buildingName;
            this.#instances = data.instances ?? 1;
            this.#efficiency = new Decimal(data.efficiency ?? 1);
            this.#basePower = new Decimal(data.basePower);

            this.#power = this.#basePower.mul(this.instances);
            items = new UnitMap(data.items).scale(this.instances).scale(this.efficiency);
        }


        this.#items = new ReadonlyUnitMap(items);
        this.#inputs = new ReadonlyUnitMap(items.filter(entry => entry.value.lt(0)));
        this.#outputs = new ReadonlyUnitMap(items.filter(entry => entry.value.gt(0)));
    }

    get name() { return this.#name; }
    get buildingName() { return this.#buildingName; }
    get basePower() { return this.#basePower; }
    get power() { return this.#power; }
    get instances() { return this.#instances; }
    get efficiency() { return this.#efficiency; }
    get items() { return this.#items; }
    get inputs() { return this.#inputs; }
    get outputs() { return this.#outputs; }
}
