import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from 'src/models/categoria';
import { CategoriasService } from './categorias.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [CategoriasService],
  exports: [CategoriasService],
})
export class ServiceModule {}