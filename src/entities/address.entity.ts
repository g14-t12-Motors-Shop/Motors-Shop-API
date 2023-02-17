import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
export class Address{
    
    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @Column("varchar", {length: 50})
    state: string
    
    @Column("varchar", {length: 50})
    city: string

    @Column("varchar", {length: 127})
    street: string

    @Column("varchar", {length: 8})
    zipCode: string

    @Column("integer", {nullable: true})
    number: number

    @Column("varchar", {length: 127, nullable: true})
    complement: string
}
