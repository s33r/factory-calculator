import { z } from 'zod';

export type FGBuildableWallBag = z.infer<typeof FGBuildableWall.schema>;

export default class FGBuildableWall {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableWall'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableWallBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}