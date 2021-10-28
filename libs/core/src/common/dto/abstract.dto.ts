import { AbstractEntity } from '../abstract.entity';

export class AbstractDto {
  id: number;
  created_at: Date;
  updated_at: Date;

  constructor(entity: AbstractEntity) {
    this.id = entity.id;
    this.created_at = entity.created_at;
    this.updated_at = entity.updated_at;
  }
}
