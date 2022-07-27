import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Reserva } from './entities/reserva.entity';

@Injectable()
export class ReservaService {
  constructor(@InjectRepository(Reserva) private readonly repository: Repository<Reserva>){}

  create(reserva: CreateReservaDto): Promise<Reserva> {
    const newReserva = this.repository.create(reserva);
    return this.repository.save(newReserva);
  }

  findAll(): Promise<Reserva[]> {
    return this.repository.find();
  }

  async findOne(codigo: number): Promise<Reserva> {
    const reserva = await this.repository.findOneBy({codigo: codigo})
    return reserva;
  }

  async update(codigo: number, reserva: UpdateReservaDto): Promise<Reserva> {
    const updateReserva = await this.repository.preload({
      codigo: codigo,
      ...reserva,
    });

    if(!updateReserva){
      throw new NotFoundException("Código de usuário não encontrado!");
    }

    return this.repository.save(updateReserva);
  }

  async remove(codigo: number) {
    const reserva = await this.findOne(codigo);
    return this.repository.remove(reserva);
  }
}
