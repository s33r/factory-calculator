import Producer from './Producer.js';
// import type RateMap from './RateMap.js';


export type FlowTableEntryBag = {
    name     : string;
    prior?   : FlowTableEntry;
    producers: ReadonlyArray<Producer>;
};

export class FlowTableEntry extends Producer {
    readonly #prior?   : FlowTableEntry;
    readonly #producers: ReadonlyArray<Producer>;
    // readonly #output   : RateMap;

    constructor(data: FlowTableEntryBag) {
        super(Producer.merge(data.producers, { name: data.name }));

        this.#producers = Object.freeze(Array.from(data.producers));
        this.#prior = data.prior;
        // this.#output = calculateOutput(this.producers, this.prior?.output);
    }

    get producers() { return this.#producers; }
    get prior() { return this.#prior; }
    // get output() { return this.#output; }
}

// const calculateOutput = (
//     producers: ReadonlyArray<Producer>,
//     input?: RateMap,
// ): RateMap => {
//     const result = new RateMap(input);

//     producers.forEach(producer => {
//         producer.


//         // i Iron Ore   @ 60 x 1 = 60
//         // o Iron Ingot @ 30 x 2 = 120
//         // d Iron Ingot @ 20 x 1 = 60
//     });


// };
