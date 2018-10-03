import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Column,
} from "typeorm";
import Message from "./Message";
import User from "./User";

@Entity()
class Chat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => Message, message => message.chat)
  messages: Message[];

  @Column({ nullable: true })
  passengerId: number;

  @Column({ nullable: true })
  driverId: number;

  @OneToMany(type => User, user => user.chatsAsPassenger)
  passenger: User;

  @OneToMany(type => User, user => user.chatsAsDriver)
  driver: User;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default Chat;
