import { z } from 'zod';

export type CatalogEntryBag = z.infer<typeof CatalogEntry.schema>;

export default class CatalogEntry {
    static get schema() {
        return z.object({
            NativeClass: z.string(),
            Classes    : z.array(z.unknown()),
        });
    }

    static create(rawData: unknown) { return new this(this.schema.parse(rawData)); }

    readonly #name   : string;
    readonly #classes: ReadonlyArray<unknown>;

    constructor(data: CatalogEntryBag) {
        this.#name = data.NativeClass;
        this.#classes = Object.freeze(Array.from(data.Classes));
    }

    get name() { return this.#name; }
    get classes() { return this.#classes; }
}
