import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Publicacao {
    @PrimaryColumn({name: 'isbn', type: 'varchar', length: 12})
    isbn: Publicacao;

    @Column({name: 'titulo', type: 'varchar', length: 40})
    titulo: string;

    @Column({name: 'autor', type: 'varchar', length: 35})
    autor: string;

    @Column({name: 'editora', type: 'varchar', length: 30})
    editora: string;
}