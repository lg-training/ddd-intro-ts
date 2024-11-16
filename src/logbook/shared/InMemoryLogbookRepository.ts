import {ILogbookRepository} from "./ILogbookRepository";
import {Logbook} from "../domain/Logbook";

export class InMemoryLogbookRepository implements ILogbookRepository {

    private readonly _logbook: Logbook[] = [];

    public async save(logbook: Logbook): Promise<boolean> {
        this._logbook.push(logbook);
        return true;
    }

    public async find(id: string): Promise<Logbook | null> {
        return this._logbook.find(x => x.id === id) ?? null;
    }


}