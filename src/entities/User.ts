import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("dataUser")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    origin: number;

    @Column()
    destiny: number;

    @Column()
    time: number;

    @Column()
    plan: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id){
            this.id = uuid();
        }
    }
}

export {User}