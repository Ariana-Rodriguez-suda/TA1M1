import { Module } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorController } from './profesor.controller';
import { PrismaProfesorService } from 'src/prisma/profesor-prisma.service';

@Module({
  controllers: [ProfesorController],
  providers: [ProfesorService, PrismaProfesorService],
})
export class ProfesorModule {}
