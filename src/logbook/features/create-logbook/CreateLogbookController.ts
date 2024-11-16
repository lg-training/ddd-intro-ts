import {Request, Response} from "express";
import {
    CreateLogbookUseCase,
    ICreatedLogbookResult
} from "./CreateLogbookUseCase";

export class CreatedLogbookDto implements ICreatedLogbookResult {
    // todo: add tovalidations
    // @ts-ignore
    public readonly logbookId: string;

}

export class CreateLogbookController {

    public constructor(private readonly _useCase: CreateLogbookUseCase) {

    }

    public async handle(req: Request, res: Response): Promise<void> {

        const userId = "userIdFake"

        const response = await this._useCase.execute({
            name: req.body.name,
            userId: userId
        })

        res.status(201).json({id: response.logbookId})
    }
}