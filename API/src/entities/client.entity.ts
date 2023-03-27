import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { Contacts } from "./contact.entity";

@Entity("client")
class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @Column({ length: 50 })
  telephone: string;

  @CreateDateColumn({ type: "date" })
  orderedAt: Date | string;

  @OneToMany(() => Contacts, (constacts) => constacts.client)
  contacts: Contacts[];
}

export { Client };
