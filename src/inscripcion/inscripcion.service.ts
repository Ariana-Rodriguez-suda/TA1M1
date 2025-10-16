import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateInscripcionDto } from './dto/create-inscripcion.dto'
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto'

@Injectable()
export class InscripcionService {
  constructor(private prisma: PrismaService) {}

  findAll(skip = 0, take = 10) {
    return this.prisma.inscripcion.findMany({ skip, take })
  }

  findOne(id: number) {
    return this.prisma.inscripcion.findUnique({
      where: { id_inscripcion: id },
    })
  }

  create(createInscripcionDto: CreateInscripcionDto) {
    const { id_estudiante, id_materia, ...rest } = createInscripcionDto
    return this.prisma.inscripcion.create({
      data: {
        ...rest,
        estudiante: { connect: { id_estudiante } },
        materia: { connect: { id_materia } },
      },
    })
  }

  update(id: number, updateInscripcionDto: UpdateInscripcionDto) {
    const { id_estudiante, id_materia, ...rest } = updateInscripcionDto
    return this.prisma.inscripcion.update({
      where: { id_inscripcion: id },
      data: {
        ...rest,
        ...(id_estudiante && { estudiante: { connect: { id_estudiante } } }),
        ...(id_materia && { materia: { connect: { id_materia } } }),
      },
    })
  }

  remove(id: number) {
    return this.prisma.inscripcion.delete({
      where: { id_inscripcion: id },
    })
  }
}
