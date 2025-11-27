import { Controller, Get, Post, Put, Body, Patch, Param, Delete, Query, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { JwtAuthGuard } from 'src/Auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller('estudiante')
@UseGuards(JwtAuthGuard)
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Post()
  create(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudianteService.create(createEstudianteDto)
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    const skip = (page - 1) * limit
    const data = await this.estudianteService.findAll(skip, limit)
    return { page, limit, data }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const estudiante = await this.estudianteService.findOne(id)
    if (!estudiante) throw new NotFoundException(`Estudiante con id ${id} no encontrado`)
    return estudiante
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() dto: UpdateEstudianteDto) {
    return this.estudianteService.update(+id, dto);
  }

  @Put(':id')
  fullUpdate(@Param('id') id: string, @Body() dto: UpdateEstudianteDto) {
    return this.estudianteService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudianteService.remove(+id);
  }
}
