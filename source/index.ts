import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';
import type { ExpandedClassEntry } from './satisfactory/phase1.js';
import { phase1 } from './satisfactory/phase1.js';
import { unwrap } from '@ehwillows/results/lib/ResultContainer.js';
import { phase2 } from './satisfactory/phase2.js';


const generateClass = (
    name: string,
    NativeClass: string,
) => {
    const bagName = `${ name }Bag`;

    return `
import { z } from 'zod';

export type ${ bagName } = z.infer<typeof ${ name }.schema>;

export default class ${ name } {
    static get schema() {
        return z.object({
            NativeClass: z.literal("${ NativeClass }"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: ${ bagName }) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}
    `.trim();
};


const generateClasses = async (
    phase1Data: Array<ExpandedClassEntry>,
) => {
    const nativeClasses = new Set<string>();
    phase1Data.forEach(entry => nativeClasses.add(entry.NativeClass));


    const tuples = Array.from(nativeClasses).map(nc => {
        const nameArray = nc.split('.');
        const name = nameArray[nameArray.length - 1].replaceAll('\'', '');

        console.log(`${ name }.schema,`);

        // const content = generateClass(name, nc);

        // return [resolve(import.meta.dirname, `data2/${ name }.ts`), content];
    });

    // for (const [location, content] of tuples) {
    //     await writeFile(location, content, 'utf-8');
    // }

    // tuples.forEach(tuple => console.log(tuple[0]));
};

(async () => {
    const location = resolve(import.meta.dirname, '../test-data/satisfactory.json');
    const content = await readFile(location, 'utf-8');


    const phase1Data = unwrap(await phase1(content));
    // generateClasses(phase1Data);

    const phase2Data = await phase2(phase1Data);
    console.log(phase2Data);
})();
