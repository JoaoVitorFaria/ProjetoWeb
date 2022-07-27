import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssociadoModule } from './associado/associado.module';
import { EmprestimoModule } from './emprestimo/emprestimo.module';
import { ExemplarModule } from './exemplar/exemplar.module';
import { PublicacaoModule } from './publicacao/publicacao.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { ReservaModule } from './reserva/reserva.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: (process.env.DB_SYNCHRONIZE === 'true'),
    }),
    AssociadoModule,
    EmprestimoModule,
    ExemplarModule,
    PublicacaoModule,
    FuncionarioModule,
    ReservaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
