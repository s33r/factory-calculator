import { z } from 'zod';

export type FGBuildableRadarTowerBag = z.infer<typeof FGBuildableRadarTower.schema>;

export default class FGBuildableRadarTower {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableRadarTower'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableRadarTowerBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}