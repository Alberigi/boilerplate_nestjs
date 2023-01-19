import { BaseOptionsDTO } from './baseOptions';

export interface UpdateOptionsDTO<T> extends BaseOptionsDTO {
  select?: any;
  data: Partial<T>;
  where: any;
}
