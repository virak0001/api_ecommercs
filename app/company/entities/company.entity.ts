import { AbstractSoftDeleteEntity } from '@libs/core/common/abstract-soft-delete.entity';
import { Column, Entity } from 'typeorm';

@Entity('companies')
export class CompanyEntity extends AbstractSoftDeleteEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;
}
