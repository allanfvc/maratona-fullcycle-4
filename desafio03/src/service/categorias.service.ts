import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from 'src/models/categoria';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {

  constructor(
    @InjectRepository(Categoria)
    public readonly repository: Repository<Categoria>,
  ) {}

  findAll(): Promise<Categoria[]> {
    return this.repository.find({order: {
      "name": "ASC"
    }});
  }

  save(categoria: Categoria) {
    return this.repository.save(categoria);
  }
}
