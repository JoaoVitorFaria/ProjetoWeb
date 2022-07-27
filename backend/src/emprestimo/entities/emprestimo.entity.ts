import { Associado } from "src/associado/entities/associado.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(["nro_exemplar", "isbn"])
@Unique(["codigo_assoc"])
export class Emprestimo extends BaseEntity {
    @PrimaryGeneratedColumn()
    codigo: number;

    @Column({name: 'nro_exemplar', type: 'int'})
    nro_exemplar: number;

    @Column({name: 'isbn', type: 'varchar', length: 12})
    isbn: string;

    @ManyToOne(() => Associado, (associado: Associado) => associado.codigo, { cascade : true , eager : true})
    @JoinColumn({ name: 'codigo_assoc'})
    codigo_assoc: Associado;

    @Column({name: 'data_emp', type: 'date'})
    data_emp: Date;

    @Column({name: 'data_devol', type: 'date', default: null})
    data_devol: Date;
}