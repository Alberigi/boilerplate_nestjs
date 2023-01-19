export abstract class IBaseService<T> {
  abstract getOne(indentificator: string): Promise<T>;
  abstract getAll(): Promise<T[]>;
  abstract save(data: Partial<T>): Promise<T>;
  abstract update(
    indentificator: string | number,
    data: Partial<T>,
  ): Promise<T>;
  abstract delete(indentificator: string | number): Promise<T>;
}
