import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssociadoService } from './associado.service';
import { CreateAssociadoDto } from './dto/create-associado.dto';
import { UpdateAssociadoDto } from './dto/update-associado.dto';

@Controller('associado')
export class AssociadoController {
  constructor(private readonly associadoService: AssociadoService) {}

  @Post()
  create(@Body() createAssociadoDto: CreateAssociadoDto) {
    return this.associadoService.create(createAssociadoDto);
  }

  @Get()
  findAll() {
    return this.associadoService.findAll();
  }

  @Get(':codigo')
  findOne(@Param('codigo') codigo: number) {
    return this.associadoService.findOne(codigo);
  }

  @Patch(':codigo')
  update(@Param('codigo') codigo: number, @Body() updateAssociadoDto: UpdateAssociadoDto) {
    return this.associadoService.update(+codigo, updateAssociadoDto);
  }

  @Delete(':codigo')
  remove(@Param('codigo') codigo: number) {
    return this.associadoService.remove(codigo);
  }
}
