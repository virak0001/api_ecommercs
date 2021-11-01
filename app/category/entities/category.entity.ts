import { Entity, Column } from 'typeorm';
import { AbstractSoftDeleteEntity } from '@libs/core/common/abstract-soft-delete.entity';
@Entity('categories')
export class Category extends AbstractSoftDeleteEntity {
  @Column()
  name: string;

  @Column()
  metaName: string;

  @Column()
  slug: string;

  @Column()
  context: string;
}
