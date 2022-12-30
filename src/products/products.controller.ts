import { Body, Controller, Delete, ForbiddenException, Get, Header, HttpCode, Param, Post, Put, Query, Req, Res, UseFilters } from '@nestjs/common';
import { CreateProductDTO } from 'dto/create-product.dto';
import { Request, Response } from 'express';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { Product } from 'src/services/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
@UseFilters(HttpExceptionFilter)
export class ProductsController {
    constructor(private productService: ProductsService) {

    }

    //@HttpCode(204)
    //@Header('Authorization', 'Bearer XXXXXXXXX')
    @Post()
    async create(@Body() product: CreateProductDTO) : Promise<Product[]> {
        return this.productService.create(product);
    }

    @Get()
    async findAll(
        //@Req() request: Request,
        //@Res() response: Response,
        //@Query() query
    ): Promise<Product[]> {
        //console.log(request);
        //console.log(response);
        //console.log(query);
        return this.productService.findAll();
    }

    @Put(':id')
    update(): string {
        return 'update product';
    }

    @Delete(':id')
    async del(@Param() params): Promise<Product[]> {
        return this.productService.delete(params.id);
    }

    @Get('ab*cd')
    pattern(): string {
        return 'pattern matched';
    }

    @Get(':id')
    async findOne(@Param() params): Promise<Product> {
        return this.productService.findOne(params.id);
    }
}
