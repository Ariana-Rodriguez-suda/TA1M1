import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesorModule } from './profesor/profesor.module';
import { MateriaModule } from './materia/materia.module';
import { CarreraModule } from './carrera/carrera.module';
import { AulaModule } from './aula/aula.module';
import { InscripcionModule } from './inscripcion/inscripcion.module';
import { TituloModule } from './titulo/titulo.module';

@Module({
  imports: [PrismaModule, EstudianteModule, ProfesorModule, MateriaModule, CarreraModule, AulaModule, InscripcionModule, TituloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
