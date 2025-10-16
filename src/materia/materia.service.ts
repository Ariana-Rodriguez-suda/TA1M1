import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateMateriaDto } from './dto/create-materia.dto'
import { UpdateMateriaDto } from './dto/update-materia.dto'

@Injectable()
export class MateriaService {
  constructor(private prisma: PrismaService) {}

  findAll(skip = 0, take = 10) {
    return this.prisma.materia.findMany({ skip, take })
  }

  findOne(id: number) {
    return this.prisma.materia.findUnique({
      where: { id_materia: id },
    })
  }

  create(createMateriaDto: CreateMateriaDto) {
    const { id_carrera, id_aula, ...rest } = createMateriaDto
    return this.prisma.materia.create({
      data: {
        ...rest,
        carrera: { connect: { id_carrera } },
        aula: { connect: { id_aula } },
      },
    })
  }

  update(id: number, updateMateriaDto: UpdateMateriaDto) {
    const { id_carrera, id_aula, ...rest } = updateMateriaDto
    return this.prisma.materia.update({
      where: { id_materia: id },
      data: {
        ...rest,
        ...(id_carrera && { carrera: { connect: { id_carrera } } }),
        ...(id_aula && { aula: { connect: { id_aula } } }),
      },
    })
  }

  remove(id: number) {
    return this.prisma.materia.delete({
      where: { id_materia: id },
    })
  }
}
