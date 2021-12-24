import {
  Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn,
} from 'typeorm';
import { DatabaseInstanceEntity } from 'src/modules/core/models/database-instance.entity';
import { Transform } from 'class-transformer';

@Entity('command_execution')
export class CommandExecutionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  databaseId: string;

  @ManyToOne(
    () => DatabaseInstanceEntity,
    {
      nullable: false,
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'databaseId' })
  database: DatabaseInstanceEntity;

  @Column({ nullable: false })
  command: string;

  @Column({ nullable: false })
  @Transform((object) => JSON.stringify(object), { toClassOnly: true })
  @Transform((string) => {
    try {
      return JSON.parse(string);
    } catch (e) {
      return undefined;
    }
  }, { toPlainOnly: true })
  result: string;

  @Column({ nullable: true })
  role?: string;

  @Column({ nullable: true })
  @Transform((object) => JSON.stringify(object), { toClassOnly: true })
  @Transform((string) => {
    try {
      return JSON.parse(string);
    } catch (e) {
      return undefined;
    }
  }, { toPlainOnly: true })
  nodeOptions?: string;

  @Column({ nullable: true })
  encryption: string;

  @CreateDateColumn()
  createdAt: Date;

  constructor(entity: Partial<CommandExecutionEntity>) {
    Object.assign(this, entity);
  }
}
