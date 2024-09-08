import { fromZodIssue } from '@ehwillows/results/lib/error-factories.js';
import type { ResultContainer } from '@ehwillows/results/lib/ResultContainer.js';
import { failure, success } from '@ehwillows/results/lib/ResultContainer.js';
import { z } from 'zod';


type FieldType = string | Array<Record<string, FieldType>>;

const fieldSchema: z.ZodType<FieldType> = z.string().or(z.lazy(() => z.array(z.record(fieldSchema))));
const entrySchema = z.record(fieldSchema);
const schema = z.array(z.object({
    NativeClass: z.string(),
    Classes    : z.array(entrySchema),
}));

export type ExpandedClassEntry = {
    NativeClass: string;
} & Record<string, FieldType>;


export const phase1 = async (
    content: string,
): Promise<ResultContainer<Array<ExpandedClassEntry>>> => {
    const rawData = JSON.parse(content);

    const dataResult = schema.safeParse(rawData);

    if (dataResult.success) {
        const errors: Array<string> = [];

        const result = dataResult.data.map(catalogEntry => catalogEntry.Classes.map(classEntry => {
            if (classEntry['NativeClass']) {
                errors.push(`${ classEntry['ClassName'] } has NativeClass=${ classEntry['NativeClass'] }`);
            }

            return {
                ...classEntry,
                NativeClass: catalogEntry.NativeClass,
            } satisfies ExpandedClassEntry;
        })).flat();

        if (errors.length > 0) {
            return failure(errors);
        } else {
            return success(result);
        }
    } else {
        return failure(dataResult.error.issues.map(i => fromZodIssue(i)));
    }
};
