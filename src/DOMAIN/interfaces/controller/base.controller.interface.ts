import { ArgsUpdateDTO } from 'src/DOMAIN/dtos';

export abstract class IBaseController<T> {
  abstract getAll(): Promise<T[]>;
  abstract getOne(indentificator: string): Promise<T>;
  abstract save(data: T): Promise<T>;
  abstract delete(indentificator: string): Promise<T>;
  abstract update(args: ArgsUpdateDTO<T>): Promise<T>;
}
