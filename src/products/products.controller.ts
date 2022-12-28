import { Body, Controller, Delete, Get, Header, HttpCode, Post, Put, Query, Req, Res } from '@nestjs/common';
import { CreateProductDTO } from 'dto/create-product.dto';
import { Request, Response } from 'express';
import { Product } from 'src/services/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {

    }

    @Post()
    //@HttpCode(204)
    //@Header('Authorization', 'Bearer XXXXXXXXX')
    async create(@Body() product: CreateProductDTO) : Promise<Product[]> {
        return this.productService.create(product);
    }

    @Get()
    findAll(
        //@Req() request: Request,
        //@Res() response: Response,
        //@Query() query
    ): string {
        //console.log(request);
        //console.log(response);
        //console.log(query);
        return 'Find all';
    }

    @Put(':id')
    update(): string {
        return 'update product';
    }

    @Delete(':id')
    del(): string {
        return 'product deleted';
    }

    @Get('ab*cd')
    pattern(): string {
        return 'pattern matched';
    }

    @Get(':id')
    findOne(): string {
        return 'find one';
    }
}
