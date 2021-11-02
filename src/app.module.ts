import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ImportController } from './import/import.controller';
import { ProductController } from './product/product.controller';

@Module({
  imports: [HttpModule],
  controllers: [ImportController, ProductController],
  providers: [],
})
export class AppModule {}
