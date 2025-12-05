import { Module } from '@nestjs/common';

import { PrismaUsuariosService } from './usuarios-prisma.service';
import { PrismaCarrerasService } from './carreras-prisma.service';
import { PrismaProfesorService } from './profesor-prisma.service';

@Module({
  providers: [
    PrismaUsuariosService,
    PrismaCarrerasService,
    PrismaProfesorService,
  ],
  exports: [
    PrismaUsuariosService,
    PrismaCarrerasService,
    PrismaProfesorService,
  ],
})
export class PrismaModule {}
