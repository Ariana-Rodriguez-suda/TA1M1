import { IsString, IsInt } from 'class-validator'

export class CreateMateriaDto {
  @IsString()
  nombre_materia: string

  @IsInt()
  id_carrera: number

  @IsInt()
  id_aula: number
}
