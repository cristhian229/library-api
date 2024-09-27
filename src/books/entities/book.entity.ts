import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id:number

    @Column({ nullable: false })
    title: string

    @Column({ nullable: false })
    author:string

    @Column()
    published_date:Date

    @Column()
    genre:string

    @DeleteDateColumn()
    deletedAt: Date;
}
