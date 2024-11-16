import {ILogbookRepository} from "./ILogbookRepository";
import {Logbook} from "../domain/Logbook";
import {PrismaClient} from "@prisma/client";

const prismaClient = new PrismaClient();

export class PrismaLogbookRepository implements ILogbookRepository {


    constructor(private readonly _client: PrismaClient) {

    }

    public async save(logbook: Logbook): Promise<boolean> {
        const result = await this._client.logbook.create({

            data: {
                id: logbook.id,
                name: logbook.name,
                userId: logbook.userId
            }
        })
        return true;
    }


    public async find(id: string): Promise<Logbook | null> {
        const result = await this._client.logbook.findUnique({
            where: {
                id: id
            }
        })

        if (!result) return result;

        return new Logbook(result.id, result.userId, result.name)
    }
}