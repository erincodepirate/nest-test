import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlewares/logger/logger.middleware';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(ProductsController);

    // only apply to GET
    //consumer
    //.apply(LoggerMiddleware)
    //.forRoutes({path: 'products', method: RequestMethod.GET});

    // exclude GET
    //consumer
    //.apply(LoggerMiddleware)
    //.exclude({path: 'products', method: RequestMethod.GET})
    //.forRoutes(ProductsController);
  }
}
