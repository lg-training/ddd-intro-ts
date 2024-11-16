import {randomUUID} from "node:crypto";

export class Logbook {
    public constructor(public readonly name: string, public readonly userId: string, public readonly id: string = randomUUID()) {

    }
}