import {CreateLogbookUseCase} from "./logbook/features/create-logbook/CreateLogbookUseCase";
import {InMemoryLogbookRepository} from "./logbook/shared/InMemoryLogbookRepository";
import {ApiServer} from "./logbook/shared/ApiServer";
import {CreateLogbookController} from "./logbook/features/create-logbook/CreateLogbookController";
import {PrismaClient} from "@prisma/client";
import {PrismaLogbookRepository} from "./logbook/shared/PrismaLogbookRepository";
import {GetLogbookController} from "./logbook/features/get-logbook/GetLogbookController";
import {GetLogbookUseCase} from "./logbook/features/get-logbook/GetLogbookUseCase";

export async function main(): Promise<void>{

    const client = new PrismaClient();
    const prismaRepo = new PrismaLogbookRepository(client);
    const inMemoryRepo = new InMemoryLogbookRepository();
    const useCase = new CreateLogbookUseCase(prismaRepo);
    const controller = new CreateLogbookController(useCase);
    const getUseCase = new GetLogbookUseCase(prismaRepo);
    const getController = new GetLogbookController(getUseCase);

    await ApiServer.run(8080, controller, getController);
}


main()