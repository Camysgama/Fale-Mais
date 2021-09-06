import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserData1630374691188 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "dataUser", 
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "origin",
                        type:"int"
                    },
                    {
                        name:"destiny",
                        type:"int"
                    },
                    {
                        name:"time",
                        type:"int"
                    },
                    {
                        name:"plan",
                        type:"int"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("dataUser");
    }

}