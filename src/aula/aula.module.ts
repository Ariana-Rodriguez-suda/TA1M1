import { Module } from '@nestjs/common';
import { AulaService } from './aula.service';
import { AulaController } from './aula.controller';
import { PrismaCarrerasService } from 'src/prisma/carreras-prisma.service';

@Module({
  controllers: [AulaController],
  providers: [AulaService, PrismaCarrerasService],
})
export class AulaModule {}
