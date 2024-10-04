
import type { z } from 'zod';
import type { ExpandedClassEntry } from './phase1.js';
import type { Phase2Data } from './data/index.js';
import { dataSchema } from './data/index.js';
import type { ResultContainer } from '@ehwillows/results/lib/ResultContainer.js';
import { failure, success } from '@ehwillows/results/lib/ResultContainer.js';


type ValidationError = {
    nativeClass: string;
    className  : string;
    code       : string;
    location   : string;
    message    : string;
    issue      : z.ZodIssue;
};

const createErrorMessage = (
    e: ValidationError,
): string => `
#########################################
Error:
    nativeClass = ${ e.nativeClass },
      className = ${ e.className },
           code = ${ e.code },
       location = ${ e.location },
        message = ${ e.message },
        `.trim();

// issue   = ${ JSON.stringify(e.issue, null, '    ') }

export const phase2 = async (
    rawData: Array<ExpandedClassEntry>,
): Promise<ResultContainer<Array<Phase2Data>>> => {
    const data: Array<Phase2Data> = [];
    const errors: Array<ValidationError> = [];

    rawData.forEach(phase1Entry => {
        const phase2Entry = dataSchema.safeParse(phase1Entry);

        if (phase2Entry.success) {
            data.push(phase2Entry.data);
        } else {
            const nativeClass = phase1Entry.NativeClass;
            const className = (phase1Entry['ClassName'] as string) ?? '';

            errors.push(...phase2Entry.error.issues.map(issue => {
                const location = issue.path.join('.');
                const code: string = issue.code;
                const message = issue.message;


                return {
                    nativeClass,
                    className,
                    location,
                    code,
                    message,
                    issue,
                };
            }));
        }
    });

    if (errors.length > 0) {
        const texts = errors.map(createErrorMessage);

        console.log(`${ errors.length } errors`);
        texts.forEach(e => console.log(e));

        return failure(texts);
    } else {
        return success(data);
    }
};
