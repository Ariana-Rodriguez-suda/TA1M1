import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateTituloDto } from './dto/create-titulo.dto'
import { UpdateTituloDto } from './dto/update-titulo.dto'

@Injectable()
export class TituloService {
  constructor(private prisma: PrismaService) {}

  findAll(skip = 0, take = 10) {
    return this.prisma.titulo.findMany({ skip, take })
  }

  findOne(id: number) {
    return this.prisma.titulo.findUnique({
      where: { id_titulo: id },
    })
  }

create(createTituloDto: CreateTituloDto) {
  const { id_profesor, ...rest } = createTituloDto
  return this.prisma.titulo.create({
    data: {
      ...rest,
      profesor: { connect: { id_profesor } },  // OK
    },
  })
}

update(id: number, updateTituloDto: UpdateTituloDto) {
  const { id_profesor, ...rest } = updateTituloDto
  return this.prisma.titulo.update({
    where: { id_titulo: id },
    data: {
      ...rest,
      ...(id_profesor && { profesor: { connect: { id_profesor } } }),
    },
  })
}

  remove(id: number) {
    return this.prisma.titulo.delete({
      where: { id_titulo: id },
    })
  }
}
