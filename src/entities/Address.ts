import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50,
        nullable: false,
        name: "country"
    })
    country: string;

    @Column({
        length: 100,
        nullable: false,
        name: "city"
    })
    city: string; //city-province

    @Column({
        length: 100,
        nullable: false,
        name: "district"
    })
    district: string; //district-ward

    @Column("varchar", {
        nullable: false,
        name: "full_address" 
    })
    fullAddress: string; //combine full adress 1 and full adress 2

    @Column("int", {
        nullable: false,
        name: "postal_code"
    })
    postalCode: number; //TODO : check if it is a number or a string
    
}