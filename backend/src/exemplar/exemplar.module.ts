import { Module } from '@nestjs/common';
import { ExemplarService } from './exemplar.service';
import { ExemplarController } from './exemplar.controller';
import { Exemplar } from './entities/exemplar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ExemplarController],
  providers: [ExemplarService],
  imports: [TypeOrmModule.forFeature([Exemplar])]
})
export class ExemplarModule {}
