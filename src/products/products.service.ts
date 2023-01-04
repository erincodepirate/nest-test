import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/services/product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { ProductsEntity } from './products.entity';
import { CreateProductDTO } from 'dto/create-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity)
        private readonly productRepository: Repository<ProductsEntity>
    ) {

    }

    products: Product[] = [];
    async create(product: CreateProductDTO): Promise<Product> {
        /*this.products.push(product);
        return this.products;*/
        return await this.productRepository.save(product)
    }
    async findAll(): Promise<Product[]> {
        //return this.products;
        return await this.productRepository.find();
    }
    async findOne(id: number): Promise<Product> {
        //return this.products.find(p=> p.id == id);
        /*const findOptions: FindOneOptions = {
            relations: ["products"],
            where: {
            id: id,
            }
        }*/
        const results = await this.productRepository.findOneBy({id:id});

        if(!results) {
            throw new NotFoundException('Could not find any product');
        }
        return results;
    }
    delete(id: number): Product[] {
        const index = this.products.findIndex(p => p.id === id);
        this.products.splice(index, 1);
        return this.products;
        //return this.productRepository.delete
    }
}
