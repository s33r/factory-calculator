import { z } from 'zod';
import CatalogEntry from './CatalogEntry.js';

export type CatalogBag = z.infer<typeof Catalog.schema>;

export default class Catalog {
    static get schema() {
        return z.object({
            dataLocation: z.string(),
            entries     : z.array(CatalogEntry.schema),
        });
    }

    static create(rawData: unknown) { return new this(this.schema.parse(rawData)); }

    readonly #dataLocation: string;
    readonly #entries     : ReadonlyArray<CatalogEntry>;

    constructor(data: CatalogBag) {
        this.#dataLocation = data.dataLocation;
        this.#entries = Object.freeze(Array.from(data.entries.map(e => new CatalogEntry(e))));
    }

    get dataLocation() { return this.#dataLocation; }
    get entries() { return this.#entries; }
}
