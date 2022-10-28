import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Post } from './post.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 255 })
  email: string;

  @Column()
  role: string;

  @Column()
  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
