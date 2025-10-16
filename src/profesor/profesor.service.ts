import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateProfesorDto } from './dto/create-profesor.dto'
import { UpdateProfesorDto } from './dto/update-profesor.dto'

@Injectable()
export class ProfesorService {
  constructor(private prisma: PrismaService) {}

  findAll(skip = 0, take = 10) {
    return this.prisma.profesor.findMany({ skip, take })
  }

  findOne(id: number) {
    return this.prisma.profesor.findUnique({
      where: { id_profesor: id },
    })
  }

  create(createProfesorDto: CreateProfesorDto) {
    return this.prisma.profesor.create({
      data: createProfesorDto,
    })
  }

  update(id: number, updateProfesorDto: UpdateProfesorDto) {
    return this.prisma.profesor.update({
      where: { id_profesor: id },
      data: updateProfesorDto,
    })
  }

  remove(id: number) {
    return this.prisma.profesor.delete({
      where: { id_profesor: id },
    })
  }
}
