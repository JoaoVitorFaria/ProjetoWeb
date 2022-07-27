import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum tipo_associado {
    grad = 'Grad',
    posgrad = 'Posgrad',
    prof = 'Prof'
}

@Entity('associado')
export class Associado extends BaseEntity {
    @PrimaryGeneratedColumn()
    codigo: number;

    @Column({name: 'nome', type: 'varchar', length: 35})
    nome: string;

    @Column({name: 'endereco', type: 'varchar', length: 45})
    endereco: string;

    @Column({name: 'email', type: 'varchar', length: 20})
    email: string;

    @Column({name: 'senha', type: 'varchar', length: 20})
    senha: string;

    @Column({name: 'status', type: 'enum', enum: tipo_associado})
    status: tipo_associado;
}