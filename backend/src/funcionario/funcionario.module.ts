import { Module } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioController } from './funcionario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from './entities/funcionario.entity';

@Module({
  controllers: [FuncionarioController],
  providers: [FuncionarioService],
  imports: [TypeOrmModule.forFeature([Funcionario])]
})
export class FuncionarioModule {}
