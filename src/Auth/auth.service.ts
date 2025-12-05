import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaUsuariosService } from '../prisma/usuarios-prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prismaUsuarios: PrismaUsuariosService,
  ) {}

  async validateUser(correo: string, password: string) {
    // Buscar usuario real en la BD
    const user = await this.prismaUsuarios.usuario.findUnique({
      where: { correo },
    });

    if (!user) return null;

    // Validación simple, luego añadimos hash
    if (user.clave !== password) return null;

    return user;
  }

  async login(user: any) {
    const payload = {
      sub: user.id_usuario,
      correo: user.correo,
      rol: user.rolId,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
