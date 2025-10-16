import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateProfesorDto {
  @IsString()
  nombre: string

  @IsString()
  apellido: string

    @IsEmail()
  correo: string

  @IsOptional()
  @IsString()
  telefono?: string

};