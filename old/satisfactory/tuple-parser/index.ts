import type GeneralError from '@ehwillows/results/lib/GeneralError.js';

import { parseExpression } from './parser.js';
import type { ResultContainer } from '@ehwillows/results/lib/ResultContainer.js';
import { success, wrap } from '@ehwillows/results/lib/ResultContainer.js';
import { TreeNode } from './TreeNode.js';


export const parse = (
    content: string,
): ResultContainer<TreeNode> => {
    const preparedContent = content.trim();

    console.log(preparedContent);

    const node = new TreeNode({
        label : 'root',
        value : '🏁',
        offset: 0,
    });

    if (preparedContent) {
        const chars = Array.from(content);

        const errors: Array<GeneralError> = [];

        parseExpression(chars, node, errors);

        return wrap(node, errors);
    } else {
        return success(node);
    }
};
