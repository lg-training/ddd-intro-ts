import {Logbook} from "../../domain/Logbook";
import {ILogbookRepository} from "../../shared/ILogbookRepository";
import {IUseCase} from "../../../shared/IUseCase";

export interface ICreateLogbookDto {
    name: string;
    userId: string;
}

export interface ICreatedLogbookResult {
    logbookId: string;
}

export class CreateLogbookUseCase
    implements IUseCase<ICreateLogbookDto, ICreatedLogbookResult>{

    public constructor(private readonly _logbookRepo: ILogbookRepository) {
    }

    public async execute(input: ICreateLogbookDto): Promise<ICreatedLogbookResult> {

        const logbook = new Logbook(input.name, input.userId);
        const result = await this._logbookRepo.save(logbook)

        if (!result) {

            throw new Error("Could not save logbook");
        }

        return {
            logbookId: logbook.id
        }
    }
}