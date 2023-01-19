export abstract class IBaseController<T> {
  abstract getAll(): Promise<T[]>;
  abstract getOne(indentificator: string): Promise<T>;
  abstract save(data: T): Promise<T>;
  abstract delete(indentificator: string): Promise<T>;
  abstract update(indentificator: string, data: Partial<T>): Promise<T>;
}
