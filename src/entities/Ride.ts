import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { rideStatus } from "../types/types";

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

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default Ride;
