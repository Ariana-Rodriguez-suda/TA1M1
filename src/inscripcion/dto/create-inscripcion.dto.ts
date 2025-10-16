import { IsInt, IsDateString } from 'class-validator'

export class CreateInscripcionDto {
  @IsInt()
  id_estudiante: number

  @IsInt()
  id_materia: number

  @IsDateString()
  fecha_inscripcion: string
}
