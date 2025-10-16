import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateEstudianteDto } from './dto/create-estudiante.dto'
import { UpdateEstudianteDto } from './dto/update-estudiante.dto'

@Injectable()
export class EstudianteService {
  constructor(private prisma: PrismaService) {}

  findAll(skip = 0, take = 10) {
    return this.prisma.estudiante.findMany({ skip, take })
  }

  findOne(id: number) {
    return this.prisma.estudiante.findUnique({
      where: { id_estudiante: id },
    })
  }
  
  create(createEstudianteDto: CreateEstudianteDto) {
    return this.prisma.estudiante.create({
      data: createEstudianteDto,
    })
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return this.prisma.estudiante.update({
      where: { id_estudiante: id },
      data: updateEstudianteDto,
    })
  }

  remove(id: number) {
    return this.prisma.estudiante.delete({
      where: { id_estudiante: id },
    })
  }
}
