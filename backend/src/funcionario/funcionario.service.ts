import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { Funcionario } from './entities/funcionario.entity';

@Injectable()
export class FuncionarioService {
  constructor(@InjectRepository(Funcionario) private readonly repository: Repository<Funcionario>){}

  create(associado: CreateFuncionarioDto): Promise<Funcionario> {
    const newFuncionario = this.repository.create(associado);
    return this.repository.save(newFuncionario);
  }

  findAll(): Promise<Funcionario[]> {
    return this.repository.find();
  }

  async findOne(codigo: number): Promise<Funcionario> {
    const funcionario = await this.repository.findOneBy({codigo: codigo})
    return funcionario;
  }

  async update(codigo: number, funcionario: UpdateFuncionarioDto): Promise<Funcionario> {
    const updateFuncionario = await this.repository.preload({
      codigo: codigo,
      ...funcionario,
    });

    if(!updateFuncionario){
      throw new NotFoundException("Código de funcionário não encontrado!");
    }

    return this.repository.save(updateFuncionario);
  }

  async remove(codigo: number) {
    const funcionario = await this.findOne(codigo);
    return this.repository.remove(funcionario);
  }
}
