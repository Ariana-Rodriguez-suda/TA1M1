import { Module } from '@nestjs/common';
import { TituloService } from './titulo.service';
import { TituloController } from './titulo.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TituloController],
  providers: [TituloService, PrismaService],
})
export class TituloModule {}
