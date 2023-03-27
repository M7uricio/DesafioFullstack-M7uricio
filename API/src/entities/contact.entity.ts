import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";

import { Client } from "./client.entity";

@Entity("contacts")
class Contacts {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 50 })
  telephone: string;

  @CreateDateColumn({ type: "date" })
  orderedAt: Date | string;

  @ManyToOne(() => Client, (client) => client.contacts)
  client: Client;
}

export { Contacts };
