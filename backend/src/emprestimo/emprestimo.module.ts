import { Module } from '@nestjs/common';
import { EmprestimoService } from './emprestimo.service';
import { EmprestimoController } from './emprestimo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Emprestimo } from './entities/emprestimo.entity';

@Module({
  controllers: [EmprestimoController],
  providers: [EmprestimoService],
  imports: [TypeOrmModule.forFeature([Emprestimo])]
})
export class EmprestimoModule {}
