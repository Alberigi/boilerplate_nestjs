import { BaseOptionsDTO } from './baseOptions';

export interface FindOptionsDTO extends BaseOptionsDTO {
  select?: any;
  where: any;
}
