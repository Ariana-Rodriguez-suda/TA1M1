import { Module } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorController } from './profesor.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProfesorController],
  providers: [ProfesorService, PrismaService],
})
export class ProfesorModule {}
