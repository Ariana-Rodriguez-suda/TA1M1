import { Module } from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';
import { InscripcionController } from './inscripcion.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [InscripcionController],
  providers: [InscripcionService, PrismaService],
})
export class InscripcionModule {}
