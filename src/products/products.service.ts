import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    products = [];
    create(product) {
        this.products.push(product);
        return this.products;
    }
}
