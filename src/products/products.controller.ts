import { Controller, Delete, Get, Header, HttpCode, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('products')
export class ProductsController {
    @Post()
    //@HttpCode(204)
    //@Header('Authorization', 'Bearer XXXXXXXXX')
    create():string {
        return 'product created';
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
