import { Module } from '@nestjs/common';
import { AssociadoService } from './associado.service';
import { AssociadoController } from './associado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Associado } from './entities/associado.entity';

@Module({
  controllers: [AssociadoController],
  providers: [AssociadoService],
  imports: [TypeOrmModule.forFeature([Associado])]
})
export class AssociadoModule {}
