import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExemplarService } from './exemplar.service';
import { CreateExemplarDto } from './dto/create-exemplar.dto';
import { UpdateExemplarDto } from './dto/update-exemplar.dto';

@Controller('exemplar')
export class ExemplarController {
  constructor(private readonly exemplarService: ExemplarService) {}

  @Post()
  create(@Body() createExemplarDto: CreateExemplarDto) {
    return this.exemplarService.create(createExemplarDto);
  }

  @Get()
  findAll() {
    return this.exemplarService.findAll();
  }

  @Get(':numero')
  findOne(@Param('numero') numero: number) {
    return this.exemplarService.findOne(+numero);
  }

  @Patch(':numero')
  update(@Param('numero') numero: number, @Body() updateExemplarDto: UpdateExemplarDto) {
    return this.exemplarService.update(+numero, updateExemplarDto);
  }

  @Delete(':numero')
  remove(@Param('numero') numero: number) {
    return this.exemplarService.remove(+numero);
  }
}
