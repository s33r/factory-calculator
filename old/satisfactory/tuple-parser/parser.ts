import GeneralError from '@ehwillows/results/lib/GeneralError.js';
import { TreeNode } from './TreeNode.js';


const tLeftParen = '(';
const tRightParen = ')';
const tDoubleQuote = '"';
const tEquals = '=';
const tForwardSlash = '\\';

const terminals = Object.freeze({
    tLeftParen   : '(',
    tRightParen  : ')',
    tDoubleQuote : '"',
    tEquals      : '=',
    tForwardSlash: '\\',
});

const stopSet: ReadonlySet<string> = new Set(Object.values(terminals));

const print = (
    chars: Array<string>,
) => console.log(`chars=${ chars.join('') }`);

export const parseExpression = (
    chars: Array<string>,
    node: TreeNode,
    errors: Array<GeneralError>,
) => {
    while (chars.length > 0) {
        if (chars[0] === tLeftParen) {
            parseTuple(chars, node, errors);
        } else if (chars[0] === tDoubleQuote) {
            parseString(chars, node, errors);
        } else if (chars[0] === tEquals) {
            node.addChild({ label: 'equals' });
            chars.shift();
        } else {
            parseText(chars, node, errors);
        }
    }
};

export const parseText = (
    chars: Array<string>,
    node: TreeNode,
    errors: Array<GeneralError>,
) => {
    if (chars.length === 0) return;

    let value = '';

    while (chars.length > 0) {
        if (stopSet.has(chars[0])) {
            break;
        } else {
            const next = chars.shift() ?? '';

            if (next) {
                value += next;
            } else {
                break;
            }
        }
    }

    node.addChild({
        label: 'text',
        value,
    });

    console.log(`text = '${ value }'`);
};


export const parseTuple = (
    chars: Array<string>,
    node: TreeNode,
    errors: Array<GeneralError>,
) => {
    if (chars.length === 0) return;
    chars.shift();

    const tupleNode = new TreeNode({
        label: 'tuple',
        value: '',
    }, node);

    while (chars[0] !== tRightParen) {
        if (chars.length === 0) {
            // errors.push(new GeneralError({ message: 'Unclosed tuple', location: '' }));
            throw new Error(`Unclosed Tuple (remaining: ${ chars.join('') })`);
            break;
        } else {
            parseExpression(chars, tupleNode, errors);
        }
    }

    chars.shift();
    node.addChild(tupleNode);
};

export const parseString = (
    chars: Array<string>,
    node: TreeNode,
    errors: Array<GeneralError>,
) => {
    if (chars.length === 0) return;

    chars.shift();

    let value = '';
    let escape = false;

    while (chars.length > 0) {
        const next = chars.shift();

        if (escape && next) {
            value += next;
            escape = false;
        } else if (next === tDoubleQuote) {
            break;
        } else if (next === tForwardSlash) {
            escape = true;
        } else if (next) {
            value += next;
        } else {
            errors.push(new GeneralError({ message: `Unclosed string ${ value }`, location: ''  }));
            throw new Error(`Unclosed string (remaining: ${ chars.join('') })`);
            break;
        }
    }

    node.addChild({
        label: 'string',
        value,
    });
};
