import {
  DeleteOptionsDTO,
  FindAllOptionsDTO,
  FindOptionsDTO,
  UpdateOptionsDTO,
} from 'src/DOMAIN/dtos';

export abstract class IBaseRepository<T> {
  abstract findOne(options: FindOptionsDTO): Promise<T>;
  abstract findAll(options?: FindAllOptionsDTO): Promise<T[]>;
  abstract save(data: Partial<T>): Promise<T>;
  abstract delete(options: DeleteOptionsDTO): Promise<T>;
  abstract update(options: UpdateOptionsDTO<T>): Promise<T>;
}
