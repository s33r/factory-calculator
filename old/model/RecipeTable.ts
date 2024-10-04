import Producer from './Producer.js';
import type RecipeInstance from './RecipeInstance.js';

export type RecipeTableArgs = {
    recipes: Array<RecipeInstance>;
    name   : string;
};

export class RecipeTable extends Producer {
    readonly #recipes: ReadonlyArray<RecipeInstance>;

    constructor(data: RecipeTableArgs) {
        super(Producer.merge(data.recipes, { name: data.name }));

        this.#recipes = Object.freeze(Array.from(data.recipes));
    }

    get recipes() { return this.#recipes; }
}
