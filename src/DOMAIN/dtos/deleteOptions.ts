import { BaseOptionsDTO } from './baseOptions';

export interface DeleteOptionsDTO extends BaseOptionsDTO {
  select?: any;
  where: any;
}
