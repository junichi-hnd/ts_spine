interface IAvator {
    init(): void;
    play(): void;
    stop(): void;
    changeParts(id: string, name: string): void;
}
export default IAvator;
