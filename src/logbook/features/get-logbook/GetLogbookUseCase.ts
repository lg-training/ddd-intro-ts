import {IUseCase} from "../../../shared/IUseCase";
import {Logbook} from "../../domain/Logbook";
import {ICreatedLogbookResult} from "../create-logbook/CreateLogbookUseCase";
import {ILogbookRepository} from "../../shared/ILogbookRepository";

interface IGetLogbookDto {
    id: string
}


interface IGetLogbookResult{

}


export class LogbookDto{
    constructor(public readonly id: string, public readonly name: string) {
    }
    public static from(logbook: Logbook) :LogbookDto {
        return new LogbookDto(logbook.id, logbook.name);
    }
}
export class GetLogbookUseCase implements IUseCase<IGetLogbookDto, LogbookDto>{
    public constructor(private readonly _logbookRepo: ILogbookRepository) {

    }
    public async execute(input: IGetLogbookDto): Promise<LogbookDto> {
        const logbook= await this._logbookRepo.find(input.id)

        if (!logbook) {
            throw new Error("not found");
        }

        return logbook;
    }



}