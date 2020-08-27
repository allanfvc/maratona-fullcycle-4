import { Controller, Get, Post, Body } from '@nestjs/common';
import { Categoria } from 'src/models/categoria';
import { CategoriasService } from 'src/service/categorias.service';

@Controller('categories')
export class CategoriasController {

  constructor(private service: CategoriasService){}
  @Post()
  create(@Body() body: Categoria): Promise<Categoria> {
    if(body.id) {
      body.id = undefined;
    }
    return this.service.save(body);
  }

  @Get()
  findAll(): Promise<Categoria[]> {
    return this.service.findAll()
  }
}
