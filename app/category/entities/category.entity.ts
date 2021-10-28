import { Entity, Column } from 'typeorm';
import { AbstractSoftDeleteEntity } from '../../../libs/core/src/common/abstract-soft-delete.entity';
@Entity('categories')
export class Category extends AbstractSoftDeleteEntity {
  @Column()
  name: string;
}
