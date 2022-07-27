import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExemplarDto } from './dto/create-exemplar.dto';
import { UpdateExemplarDto } from './dto/update-exemplar.dto';
import { Exemplar } from './entities/exemplar.entity';

@Injectable()
export class ExemplarService {
  constructor(@InjectRepository(Exemplar) private readonly repository: Repository<Exemplar>){}
  
  create(exemplar: CreateExemplarDto): Promise<Exemplar> {
    const newExemplar = this.repository.create(exemplar);
    return this.repository.save(newExemplar);
  }

  findAll(): Promise<Exemplar[]> {
    return this.repository.find({loadRelationIds:true});
  }

  async findOne(numero: number): Promise<Exemplar> {
    const exemplar = await this.repository.findOne({
      where: {numero: numero},
      loadRelationIds: true
    });
    return exemplar;
  }

  async update(numero: number, exemplar: UpdateExemplarDto): Promise<Exemplar> {
    const updateExemplar = await this.repository.preload({
      numero: numero,
      ...exemplar,
    });

    if(!updateExemplar){
      throw new NotFoundException("Número de exemplar não encontrado!");
    }

    return this.repository.save(updateExemplar);
  }

  async remove(numero: number) {
    const exemplar = await this.findOne(numero);
    return this.repository.remove(exemplar);
  }
}
