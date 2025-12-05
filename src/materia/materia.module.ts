import { Module } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaController } from './materia.controller';
import { PrismaCarrerasService } from 'src/prisma/carreras-prisma.service';

@Module({
  controllers: [MateriaController],
  providers: [MateriaService, PrismaCarrerasService],
})
export class MateriaModule {}
