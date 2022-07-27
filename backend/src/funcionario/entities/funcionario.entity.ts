import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum tipo_funcionario {
    gerente = 'gerente',
    funcionario = 'funcionario'
}

@Entity()
export class Funcionario extends BaseEntity {
    @PrimaryGeneratedColumn()
    codigo: number;

    @Column({name: 'nome', type: 'varchar', length: 35})
    nome: string;

    @Column({name: 'email', type: 'varchar', length: 20})
    email: string;

    @Column({name: 'senha', type: 'varchar', length: 20})
    senha: string;

    @Column({name: 'funcao', type: 'enum', enum: tipo_funcionario})
    funcao: tipo_funcionario;
}