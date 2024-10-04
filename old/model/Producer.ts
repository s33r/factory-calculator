
// import { z } from 'zod';
// import { decimalSchema, toDecimal } from '../decimalSchema.js';
// import type { Decimal } from 'decimal.js';
// import RateMap from './RateMap.js';
// import ProducerRates from './ProducerRates.js';

// export type ProducerArgs = z.infer<typeof Producer.schema>;
// export type ProducerTuple = z.infer<typeof Producer.tupleSchema>;
// export type ProducerBag = z.infer<typeof Producer.bagSchema>;

// export default class Producer  {
//     static get schema() {
//         return this.bagSchema.or(this.tupleSchema);
//     }

//     static get bagSchema() {
//         return z.object({
//             name          : z.string(),
//             instances     : z.number().optional(),
//             totalInstances: z.number().optional(),
//             efficiency    : decimalSchema,
//             items         : RateMap.schema,
//         });
//     }

//     static get tupleSchema() {
//         return z.tuple([
//             z.string(),
//             z.number().optional(),
//             z.number().optional(),
//             decimalSchema,
//             RateMap.schema.optional(),
//         ]);
//     }

//     static toString(
//         producer: Producer,
//     ) {
//         const topLine = `${ producer.name } (${ producer.instances } @ ${ producer.efficiency })`;
//         const inputs = producer.rates.demands.toString();
//         const outputs = producer.rates.demands.toString();

//         return `${ topLine }\n${ inputs }\n${ outputs }`;
//     }

//     /**
//      * Gets the sum of all the items supplied or demanded by the given producers.
//      * @param producers The producers to merge.
//      * @param template A template to use for filling in the new Producer's values (except for its items).
//      * @returns A producer that supplies and demands the items from the given producers.
//      */
//     static merge(
//         producers: ReadonlyArray<Producer>,
//         template?: Partial<ProducerBag>,
//     ): ProducerBag {
//         const items = new RateMap();

//         producers.forEach(p => {
//             items.addMap(p.#rates.items);
//         });

//         return {
//             name          : template?.name ?? producers[0].name,
//             instances     : template?.instances ?? 1,
//             totalInstances: template?.totalInstances ?? 1,
//             efficiency    : template?.efficiency ?? 1,
//             items         : Array.from(items.entries()),
//         };
//     }

//     readonly #name          : string;
//     readonly #instances     : number;
//     readonly #totalInstances: number;
//     readonly #efficiency    : Decimal;
//     readonly #baseRates     : ProducerRates;
//     readonly #rates         : ProducerRates;
//     readonly #totalRates    : ProducerRates;

//     constructor(data: ProducerArgs | Producer) {
//         let items: RateMap;

//         if (Array.isArray(data)) {
//             this.#name = data[0];
//             this.#instances = data[1] ?? 1;
//             this.#totalInstances = data[2] ?? this.instances;
//             this.#efficiency = toDecimal(data[3], 1);

//             items = new RateMap(data[4]);
//         } else if (data instanceof Producer) {
//             this.#name = data.name;
//             this.#instances = data.instances ?? 1;
//             this.#totalInstances = data.totalInstances ?? this.instances;
//             this.#efficiency = toDecimal(data.efficiency, 1);

//             items = data.baseRates.items;
//         } else  {
//             this.#name = data.name;
//             this.#instances = data.instances ?? 1;
//             this.#totalInstances = data.totalInstances ?? this.instances;
//             this.#efficiency = toDecimal(data.efficiency, 1);

//             items = new RateMap(data.items);
//         }

//         this.#baseRates = new ProducerRates(items);
//         this.#rates = new ProducerRates(items.multiplyAll(this.instances).multiplyAll(this.efficiency));
//         this.#totalRates = new ProducerRates(items.multiplyAll(this.totalInstances).multiplyAll(this.efficiency));
//     }

//     get name() { return this.#name; }
//     get instances() { return this.#instances; }
//     get totalInstances() { return this.#totalInstances; }
//     get efficiency() { return this.#efficiency; }
//     get rates() { return this.#rates; }
//     get baseRates() { return this.#baseRates; }
//     get totalRates() { return this.#totalRates; }

//     toString() { return Producer.toString(this); }
// }
