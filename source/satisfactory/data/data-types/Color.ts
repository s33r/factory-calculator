import { z } from 'zod';

export default class Color {
    static get schema() {
        return z.string().transform((arg, context) => {

        });
    }


    readonly #red  : number;
    readonly #blue : number;
    readonly #green: number;
    readonly #alpha: number;
}
