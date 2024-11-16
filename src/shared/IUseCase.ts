export class IUseCase<TInput, TOutput> {
    // @ts-ignore
    execute(input: TInput): Promise<TOutput>
}