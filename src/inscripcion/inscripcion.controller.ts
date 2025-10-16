import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto';

@Controller('inscripcion')
export class InscripcionController {
  constructor(private readonly inscripcionService: InscripcionService) {}

  @Post()
  create(@Body() createInscripcionDto: CreateInscripcionDto) {
    return this.inscripcionService.create(createInscripcionDto)
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    const skip = (page - 1) * limit
    const data = await this.inscripcionService.findAll(skip, limit)
    return { page, limit, data }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const inscripcion = await this.inscripcionService.findOne(id)
    if (!inscripcion) throw new NotFoundException(`Inscripcion con id ${id} no encontrado`)
    return inscripcion
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInscripcionDto: UpdateInscripcionDto) {
    return this.inscripcionService.update(+id, updateInscripcionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inscripcionService.remove(+id);
  }
}
