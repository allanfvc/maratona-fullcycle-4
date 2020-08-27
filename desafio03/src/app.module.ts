import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasController } from './controllers/categorias.controller';
import { ServiceModule } from './service/service.module';
import { Categoria } from './models/categoria';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "sqlite",
    database: "./maratona.db",
    entities: [Categoria]
  }),
  ServiceModule
  ],
  controllers: [AppController, CategoriasController],
  providers: [AppService],
})
export class AppModule {}
