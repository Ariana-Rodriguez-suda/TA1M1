import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { TituloService } from './titulo.service';
import { CreateTituloDto } from './dto/create-titulo.dto';
import { UpdateTituloDto } from './dto/update-titulo.dto';

@Controller('titulo')
export class TituloController {
  constructor(private readonly tituloService: TituloService) {}

  @Post()
  create(@Body() createTituloDto: CreateTituloDto) {
    return this.tituloService.create(createTituloDto)
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    const skip = (page - 1) * limit
    const data = await this.tituloService.findAll(skip, limit)
    return { page, limit, data }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const titulo = await this.tituloService.findOne(id)
    if (!titulo) throw new NotFoundException(`Titulo con id ${id} no encontrado`)
    return titulo
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTituloDto: UpdateTituloDto) {
    return this.tituloService.update(+id, updateTituloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tituloService.remove(+id);
  }
}
