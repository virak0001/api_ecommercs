import {
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

export abstract class AbstractEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    public id: number;

    @CreateDateColumn({ nullable: true })
    created_at: Date;

    @UpdateDateColumn({ nullable: true })
    updated_at: Date;
}
