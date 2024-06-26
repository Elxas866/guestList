import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Guest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column({ nullable: true })
    phone: string;
}