import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Controller('reserva')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  @Post()
  create(@Body() createReservaDto: CreateReservaDto) {
    return this.reservaService.create(createReservaDto);
  }

  @Get()
  findAll() {
    return this.reservaService.findAll();
  }

  @Get(':codigo')
  findOne(@Param('codigo') codigo: number) {
    return this.reservaService.findOne(+codigo);
  }

  @Patch(':codigo')
  update(@Param('codigo') codigo: number, @Body() updateReservaDto: UpdateReservaDto) {
    return this.reservaService.update(+codigo, updateReservaDto);
  }

  @Delete(':codigo')
  remove(@Param('codigo') codigo: number) {
    return this.reservaService.remove(+codigo);
  }
}
