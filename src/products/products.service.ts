import { Injectable, NotFoundException } from '@nestjs/common';
import { Product, UpdateProduct } from 'src/services/product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { ProductsEntity } from './products.entity';
import { CreateProductDTO } from 'dto/create-product.dto';
import { ProductDetailsEntity } from './product-details.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity)
        private readonly productRepository: Repository<ProductsEntity>,
        @InjectRepository(ProductDetailsEntity)
        private readonly productDetailsRepository:
        Repository<ProductDetailsEntity>
    ) {

    }

    products: Product[] = [];
    async create(product: CreateProductDTO): Promise<Product> {
        /*this.products.push(product);
        return this.products;*/
        // save data i nproduct details
        // add the relation with product entity
        const productDetails = await this.productDetailsRepository.save({
            dimension: product.dimension,
            partNumber: product.partNumber,
            weight: product.weight,
            manufacturer: product.manufacturer,
            origin: product.origin
        });

        //return await this.productRepository.save(product)
        const newproduct = new ProductsEntity();
        newproduct.name = product.name;
        newproduct.price = product.price;
        newproduct.qty = product.qty;
        newproduct.productDetails = productDetails
        await this.productRepository.save(newproduct);
        return {...newproduct, productDetails};
    }
    async findAll(): Promise<Product[]> {
        //return this.products;
        return await this.productRepository.find({relations: ['productDetails']});
    }
    async findOne(id: number): Promise<Product> {
        //return this.products.find(p=> p.id == id);
        /*const findOptions: FindOneOptions = {
            relations: ["products"],
            where: {
            id: id,
            }
        }*/
        const results = await this.productRepository.findOne({where:{id:id}, relations:['productDetails']});

        if(!results) {
            throw new NotFoundException('Could not find any product');
        }
        return results;
    }
    async delete(productId: number, productDetailsId: number): Promise<any> {
        /*const index = this.products.findIndex(p => p.id === id);
        this.products.splice(index, 1);
        return this.products;*/
        await Promise.all([
            await this.productRepository.delete(productId),
            await this.productDetailsRepository.delete(productDetailsId)
        ])
        //return await this.productRepository.delete(id);
        return {msg: `product is deleted with id ${productId} and details ${productDetailsId}`};
    }

    async update(id: number, recordToUpdate: UpdateProduct): Promise<Product> {
        //return await this.productRepository.update(id, recordToUpdate);
        const product = await this.productRepository.findOne({where:{id:id}, relations:['productDetails']});

        if (!product){
            throw new NotFoundException("Product not found");
        }
        const {qty, price, name} = recordToUpdate
        await this.productRepository.merge(product, {
            qty,
            name,
            price
        });
        const updatedProduct = await this.productRepository.save(product);
        const foundDetails = await this.productDetailsRepository.findOne({where: {id: product.productDetails.id}});

        const {dimension, weight, origin, manufacturer, partNumber} = recordToUpdate; 
        await this.productDetailsRepository.merge(foundDetails, {
            dimension, 
            weight, 
            origin, 
            manufacturer, 
            partNumber
        });
        const updatedDetails = await this.productDetailsRepository.save(foundDetails);
        return {...updatedProduct, productDetails: updatedDetails};
    }
}
