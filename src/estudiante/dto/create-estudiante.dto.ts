import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateEstudianteDto {
  @IsString()
  nombre: string

  @IsString()
  apellido: string

  @IsString()
  dni: string

  @IsEmail()
  correo: string

  @IsOptional()
  @IsString()
  telefono?: string
};