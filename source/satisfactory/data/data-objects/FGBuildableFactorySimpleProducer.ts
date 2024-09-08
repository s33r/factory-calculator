import { z } from 'zod';

export type FGBuildableFactorySimpleProducerBag = z.infer<typeof FGBuildableFactorySimpleProducer.schema>;

export default class FGBuildableFactorySimpleProducer {
    static get schema() {
        return z.object({
            NativeClass: z.literal("/Script/CoreUObject.Class'/Script/FactoryGame.FGBuildableFactorySimpleProducer'"),
            ClassName: z.string(),
        });
    }

    readonly #nativeClass: string;
    readonly #className: string;

    constructor(data: FGBuildableFactorySimpleProducerBag) {
        this.#nativeClass = data.NativeClass;
        this.#className = data.ClassName;
    }

    get nativeClass() { return this.#nativeClass; }
    get className() { return this.#className; }
}