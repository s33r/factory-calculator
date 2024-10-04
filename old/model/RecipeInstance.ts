// import { z } from 'zod';
// import { decimalSchema, toDecimal } from '../decimalSchema.js';
// import type { Decimal } from 'decimal.js';
// import Producer from './Producer.js';


// export type RecipeInstanceArgs =  z.infer<typeof RecipeInstance.bagSchema>;

// export default class RecipeInstance extends Producer {
//     static get bagSchema() {
//         return z.object({
//             buildingName: z.string(),
//             basePower   : decimalSchema,
//         }).merge(Producer.bagSchema);
//     }

//     readonly #buildingName: string;
//     readonly #basePower   : Decimal;

//     constructor(data: RecipeInstanceArgs) {
//         super(data);

//         this.#buildingName     = data.buildingName;
//         this.#basePower        = toDecimal(data.basePower);
//     }

//     get buildingName() { return this.#buildingName; }
//     get basePower() { return this.#basePower; }
// }
