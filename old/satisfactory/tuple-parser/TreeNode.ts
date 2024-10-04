export type TreeNodeBag = {
    label    : string;
    value   ?: string;
    offset  ?: number;
    children?: Array<TreeNodeBag>;
};

export class TreeNode {
    static toString(
        root: TreeNode | TreeNodeBag,
        depth = 0,
    ): string {
        if (root instanceof TreeNode) {
            const spacing = '-'.repeat(depth * 4);
            const prefix = spacing.length > 0 ? `|${ spacing }| ` : '| ';

            const me = `${ prefix }${ root.label } |> ${ root.value }`;


            const children = root.#children.map(c => this.toString(c, depth + 1)).join('');

            return `${ me }\n${ children }`;
        } else {
            return this.toString(new TreeNode(root), depth);
        }
    }

    static toBag(
        node: TreeNode,
    ): TreeNodeBag {
        return {
            label   : node.label,
            value   : node.value,
            offset  : node.offset,
            children: node.#children.map(this.toBag),
        };
    }

    readonly #label   : string;
    readonly #value   : string;
    readonly #offset  : number;
    readonly #parent? : TreeNode;
    readonly #children: Array<TreeNode>;

    constructor(data: TreeNodeBag, parent?: TreeNode) {
        this.#label    = data.label;
        this.#value    = data.value ?? '';
        this.#offset   = data.offset ?? 0;
        this.#children = (data.children ?? []).map(n => new TreeNode(n, this));
        this.#parent   = parent;
    }

    get label() { return this.#label; }
    get value() { return this.#value; }
    get offset() { return this.#offset; }
    get parent() { return this.#parent; }

    addChild(
        node: TreeNode | TreeNodeBag,
    )  {
        if (node instanceof TreeNode && node.parent === this) {
            return this;
        } else {
            this.#children.push(new TreeNode(node, this));

            return this;
        }
    }

    toString(depth = 0) { return TreeNode.toString(this, depth); }
    toBag() { return TreeNode.toBag(this); }
}
