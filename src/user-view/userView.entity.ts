import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class UserView {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: string;

  @Column()
  password: string;
}
