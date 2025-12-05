import { Module } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CarreraController } from './carrera.controller';
import { PrismaCarrerasService } from 'src/prisma/carreras-prisma.service';

@Module({
  controllers: [CarreraController],
  providers: [CarreraService, PrismaCarrerasService],
})
export class CarreraModule {}
