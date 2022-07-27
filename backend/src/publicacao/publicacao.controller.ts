import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PublicacaoService } from './publicacao.service';
import { CreatePublicacaoDto } from './dto/create-publicacao.dto';
import { UpdatePublicacaoDto } from './dto/update-publicacao.dto';

@Controller('publicacao')
export class PublicacaoController {
  constructor(private readonly publicacaoService: PublicacaoService) {}

  @Post()
  create(@Body() createPublicacaoDto: CreatePublicacaoDto) {
    return this.publicacaoService.create(createPublicacaoDto);
  }

  @Get()
  findAll() {
    return this.publicacaoService.findAll();
  }

  @Get(':isbn')
  findOne(@Param('isbn') isbn: string) {
    return this.publicacaoService.findOne(isbn);
  }

  @Patch(':isbn')
  update(@Param('isbn') isbn: string, @Body() updatePublicacaoDto: UpdatePublicacaoDto) {
    return this.publicacaoService.update(isbn, updatePublicacaoDto);
  }

  @Delete(':isbn')
  remove(@Param('isbn') isbn: string) {
    return this.publicacaoService.remove(isbn);
  }
}
