import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProfesorModule } from './profesor/profesor.module';
import { MateriaModule } from './materia/materia.module';
import { CarreraModule } from './carrera/carrera.module';
import { AulaModule } from './aula/aula.module';
import { InscripcionModule } from './inscripcion/inscripcion.module';
import { TituloModule } from './titulo/titulo.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './Auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { PermisoModule } from './permiso/permiso.module';
import { RolPermisoModule } from './rol-permiso/rol-permiso.module';
import { PeriodoModule } from './periodo/periodo.module';

@Module({
  imports: [    ConfigModule.forRoot({
      isGlobal: true, // permite usar .env en cualquier módulo
    }),
    PrismaModule, ProfesorModule, MateriaModule, CarreraModule, AulaModule, InscripcionModule, TituloModule, AuthModule, UsuarioModule, RolModule, PermisoModule, RolPermisoModule, PeriodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
