import RateMap from './RateMap.js';

export default class ProducerRates {
    readonly #items   : RateMap;
    readonly #demands : RateMap;
    readonly #supplies: RateMap;


    constructor(
        items: RateMap,
    ) {
        this.#items = new RateMap(items);
        this.#demands = this.items.filter(([, amount]) => amount.lt(0));
        this.#supplies = this.items.filter(([, amount]) => amount.gt(0));

        console.log(this.items.toString());
        console.log(this.supplies.toString());
        console.log(this.demands.toString());
    }

    get items() { return this.#items; }
    get demands() { return this.#demands; }
    get supplies() { return this.#supplies; }
}
