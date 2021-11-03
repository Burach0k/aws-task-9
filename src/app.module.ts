import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ImportController } from './import/import.controller';
import { ProductController } from './product/product.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ImportController, ProductController],
  providers: [],
})
export class AppModule {}
