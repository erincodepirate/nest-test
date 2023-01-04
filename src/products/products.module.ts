import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetailsEntity } from './product-details.entity';
import { ProductsController } from './products.controller';
import { ProductsEntity } from './products.entity';
import { ProductsService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity, ProductDetailsEntity])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
