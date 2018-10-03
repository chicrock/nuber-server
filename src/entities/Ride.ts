import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { rideStatus } from "../types/types";
import User from "./User";
import Chat from "./Chat";

const ACCEPTED = "ACCEPTED";
const FINISHED = "FINISHED";
const CANCELED = "CANCELED";
const REQUESTING = "REQUESTING";
const ONROUTE = "ONROUTE";

@Entity()
class Ride extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "text",
    enum: [ACCEPTED, FINISHED, CANCELED, REQUESTING, ONROUTE],
    default: REQUESTING,
  })
  status: rideStatus;

  @Column({ type: "text" })
  pickupAddress: string;

  @Column({ type: "double precision", default: 0 })
  pickupLat: number;

  @Column({ type: "double precision", default: 0 })
  pickupLng: number;

  @Column({ type: "text" })
  dropOffAddress: string;

  @Column({ type: "double precision", default: 0 })
  dropOffLat: number;

  @Column({ type: "double precision", default: 0 })
  dropOffLng: number;

  @Column({ type: "double precision", default: 0 })
  price: number;

  @Column({ type: "text" })
  distance: string;

  @Column({ type: "text" })
  duration: string;

  @Column({ nullable: true })
  passengerId: number;

  @Column({ nullable: true })
  driverId: number;

  @ManyToOne(type => User, user => user.ridesAsPassenger)
  passenger: User;

  @ManyToOne(type => User, user => user.ridesAsDriver, { nullable: true })
  driver: User;

  @Column({ nullable: true })
  chatId: number;

  @OneToOne(type => Chat, chat => chat.ride, { nullable: true })
  @JoinColumn()
  chat: Chat;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default Ride;
