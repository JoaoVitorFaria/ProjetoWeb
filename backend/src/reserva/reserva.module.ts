import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';

@Module({
  controllers: [ReservaController],
  providers: [ReservaService],
  imports: [TypeOrmModule.forFeature([Reserva])]
})
export class ReservaModule {}
