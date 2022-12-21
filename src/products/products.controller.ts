import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('products')
export class ProductsController {
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
}
