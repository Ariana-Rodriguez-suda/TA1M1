import { Controller, Get, Post, Body, Patch, Put, Param, Delete, Query, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';

@Controller('profesor')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Post()
  create(@Body() createProfesorDto: CreateProfesorDto) {
    return this.profesorService.create(createProfesorDto)
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    const skip = (page - 1) * limit
    const data = await this.profesorService.findAll(skip, limit)
    return { page, limit, data }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const profesor = await this.profesorService.findOne(id)
    if (!profesor) throw new NotFoundException(`Profesor con id ${id} no encontrado`)
    return profesor
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() dto: UpdateProfesorDto) {
    return this.profesorService.update(+id, dto);
  }

  @Put(':id')
  fullUpdate(@Param('id') id: string, @Body() dto: UpdateProfesorDto) {
    return this.profesorService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesorService.remove(+id);
  }
}
