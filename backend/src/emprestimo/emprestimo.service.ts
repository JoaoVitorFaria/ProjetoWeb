import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmprestimoDto } from './dto/create-emprestimo.dto';
import { UpdateEmprestimoDto } from './dto/update-emprestimo.dto';
import { Emprestimo } from './entities/emprestimo.entity';

@Injectable()
export class EmprestimoService {
  constructor(@InjectRepository(Emprestimo) private readonly repository: Repository<Emprestimo>){}

  create(emprestimo: CreateEmprestimoDto): Promise<Emprestimo> {
    const newEmprestimo = this.repository.create(emprestimo);
    return this.repository.save(newEmprestimo);
  }

  findAll(): Promise<Emprestimo[]> {
    return this.repository.find({loadRelationIds:true });
  }

  async findOne(codigo: number): Promise<Emprestimo> {
    const emprestimo = await this.repository.findOne({
      where: {codigo: codigo},
      loadRelationIds: true
    })
    return emprestimo;
  }

  async update(codigo: number, emprestimo: UpdateEmprestimoDto): Promise<Emprestimo> {
    const updateEmprestimo = await this.repository.preload({
      codigo: codigo,
      ...emprestimo,
    });

    if(!updateEmprestimo){
      throw new NotFoundException("Código de empréstimo não encontrado!");
    }

    return this.repository.save(updateEmprestimo);
  }

  async remove(codigo: number) {
    const emprestimo = await this.findOne(codigo);
    return this.repository.remove(emprestimo);
  }
}
