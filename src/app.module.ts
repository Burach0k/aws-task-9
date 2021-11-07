import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductController } from './product/product.controller';
import { CartController } from './cart/cart.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [AppController, ProductController, CartController],
  providers: [],
})
export class AppModule {}
