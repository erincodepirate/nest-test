import { Injectable } from '@nestjs/common';
import { Product } from 'src/services/product.interface';

@Injectable()
export class ProductsService {
    products: Product[] = [];
    create(product) {
        this.products.push(product);
        return this.products;
    }
}
