import Producer from './Producer.js';

export type FlowTableArgs = {
    recipes: Array<Producer>;
    name   : string;
};

export class FlowTable extends Producer {
    readonly #producers: ReadonlyArray<Producer>;

    constructor(data: FlowTableArgs) {
        super(Producer.merge(data.recipes, { name: data.name }));

        this.#producers = Object.freeze(Array.from(data.recipes));
    }

    get recipes() { return this.#producers; }
}
