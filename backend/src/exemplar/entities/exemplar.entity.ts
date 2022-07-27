import { Publicacao } from "src/publicacao/entities/publicacao.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, Unique } from "typeorm";

@Entity()
@Unique(["isbn"])
export class Exemplar {
    @PrimaryColumn({name: 'numero', type: 'int'})
    numero: number;

    @PrimaryColumn()
    @OneToOne(() => Publicacao, { cascade : true , eager : true})
    @JoinColumn({name: 'isbn'})
    isbn: Publicacao;

    @Column({name: 'preco', type: 'float', default: null})
    preco: number;
}