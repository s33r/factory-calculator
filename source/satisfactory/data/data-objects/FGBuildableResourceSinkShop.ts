import { z } from 'zod';

export type FGBuildableResourceSinkShopBag = z.infer<typeof FGBuildableResourceSinkShop.schema>;

export default class FGBuildableResourceSinkShop {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableResourceSinkShop'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableResourceSinkShopBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}