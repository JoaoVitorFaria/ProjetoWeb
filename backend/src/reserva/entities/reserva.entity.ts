import { Associado } from "src/associado/entities/associado.entity";
import { Publicacao } from "src/publicacao/entities/publicacao.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

export enum tipo_reserva {
    iniciado = 'Iniciado',
    avisado = 'Avisado',
    anulado = 'Anulado'
}

@Entity()
@Unique(['isbn'])
@Unique(['codigo_assoc'])
export class Reserva extends BaseEntity {
    @PrimaryGeneratedColumn()
    codigo: number;

    @OneToOne(() => Publicacao, { cascade : true , eager : true})
    @JoinColumn({name: 'isbn'})
    isbn: Publicacao;

    @OneToOne(() => Associado, { cascade : true , eager : true})
    @JoinColumn({name: 'codigo_assoc'})
    codigo_assoc: Associado;

    @Column({name: 'data', type: 'date'})
    data: Date;

    @Column({name: 'status', type: 'enum', enum: tipo_reserva})
    status: tipo_reserva;
}