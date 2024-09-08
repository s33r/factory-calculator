
import { z } from 'zod';
import type { ExpandedClassEntry } from './phase1.js';
import { dataSchema } from './data/index.js';


export const phase2 = async (
    rawData: Array<ExpandedClassEntry>,
) => {
    const data = z.array(dataSchema).parse(rawData);


    return data;
};
