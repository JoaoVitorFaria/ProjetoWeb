import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { EmprestimoService } from './emprestimo.service';
import { CreateEmprestimoDto } from './dto/create-emprestimo.dto';
import { UpdateEmprestimoDto } from './dto/update-emprestimo.dto';
import { Associado } from 'src/associado/entities/associado.entity';

@Controller('emprestimo')
export class EmprestimoController {
  constructor(private readonly emprestimoService: EmprestimoService) {}

  @Post()
  create(@Body() createEmprestimoDto: CreateEmprestimoDto) {
    return this.emprestimoService.create(createEmprestimoDto);
  }

  @Get()
  findAll() {
    return this.emprestimoService.findAll();
  }

  @Get(':codigo')
  findOne(@Param('codigo') codigo: number) {
    return this.emprestimoService.findOne(+codigo);
  }

  @Patch(':codigo')
  update(@Param('codigo') codigo: number, @Body() updateEmprestimoDto: UpdateEmprestimoDto) {
    return this.emprestimoService.update(+codigo, updateEmprestimoDto);
  }

  @Delete(':codigo')
  remove(@Param('codigo') codigo: number) {
    return this.emprestimoService.remove(+codigo);
  }
}
