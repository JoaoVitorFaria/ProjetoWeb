import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAssociadoDto } from './dto/create-associado.dto';
import { UpdateAssociadoDto } from './dto/update-associado.dto';
import { Associado } from './entities/associado.entity';

@Injectable()
export class AssociadoService {
  constructor(@InjectRepository(Associado) private readonly repository: Repository<Associado>){}

  create(associado: CreateAssociadoDto): Promise<Associado> {
    const newAssociado = this.repository.create(associado)
    return this.repository.save(newAssociado);
  }

  findAll(): Promise<Associado[]> {
    return this.repository.find();
  }

  async findOne(codigo: number): Promise<Associado> {
    const associado = await this.repository.findOneBy({codigo: codigo})
    return associado;
  }

  async update(codigo: number, associado: UpdateAssociadoDto): Promise<Associado> {
    const updateAssociado = await this.repository.preload({
      codigo: codigo,
      ...associado,
    });

    if(!updateAssociado){
      throw new NotFoundException("Código de usuário não encontrado!");
    }

    return this.repository.save(updateAssociado);
  }

  async remove(codigo: number) {
    const associado = await this.findOne(codigo);
    return this.repository.remove(associado);
  }
}
