import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaUsuariosService } from './prisma/usuarios-prisma.service';
import { PrismaCarrerasService } from './prisma/carreras-prisma.service';
import { PrismaProfesorService } from './prisma/profesor-prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaUsuarios: PrismaUsuariosService,
    private readonly prismaCarreras: PrismaCarrerasService,
    private readonly prismaProfesor: PrismaProfesorService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test-db')
    async testDB() {
      const usuarios = await this.prismaUsuarios.usuario.count()
      const carreras = await this.prismaCarreras.carrera.count()
      const profesores = await this.prismaProfesor.profesor.count()

      return {
        usuariosDB: usuarios,
        carrerasDB: carreras,
        profesorDB: profesores,
      }
    }

}
