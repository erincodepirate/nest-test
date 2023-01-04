import { Body, Controller, Delete, ForbiddenException, Get, Header, HttpCode, Param, Post, Put, Query, Req, Res, UseFilters, UseInterceptors } from '@nestjs/common';
import { CreateProductDTO } from 'dto/create-product.dto';
import { Request, Response } from 'express';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { TransformInterceptor } from 'src/common/interceptors/transform/transform.interceptor';
import { Product } from 'src/services/product.interface';
import { ProductsService } from './products.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { identity } from 'rxjs';
import { UpdateProductDTO } from 'dto/update-product.dto';


@Controller('products')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class ProductsController {
    constructor(private productService: ProductsService) {

    }

    //@HttpCode(204)
    //@Header('Authorization', 'Bearer XXXXXXXXX')
    @Post()
    async create(@Body() product: CreateProductDTO) : Promise<Product> {
        return await this.productService.create(product);
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
        return await this.productService.findAll();
    }

    @Put(':id')
    async update(@Param('id') id, @Body() recordToUpdate: UpdateProductDTO): Promise<Product> {
        return await this.productService.update(+id, recordToUpdate);
    }

    @Delete(':id')
    async del(@Param('id') id): Promise<DeleteResult> {
        return await this.productService.delete(+id);
    }

    @Get('ab*cd')
    pattern(): string {
        return 'pattern matched';
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Product> {
        return await this.productService.findOne(+id);
    }
}
