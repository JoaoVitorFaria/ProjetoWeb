import { Module } from '@nestjs/common';
import { PublicacaoService } from './publicacao.service';
import { PublicacaoController } from './publicacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publicacao } from './entities/publicacao.entity';

@Module({
  controllers: [PublicacaoController],
  providers: [PublicacaoService],
  imports: [TypeOrmModule.forFeature([Publicacao])]
})
export class PublicacaoModule {}
