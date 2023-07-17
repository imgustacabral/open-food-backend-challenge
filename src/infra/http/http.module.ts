import { CreateProduct } from '@application/product/services/create-product';
import { DeleteProductByCode } from '@application/product/services/delete-product-by-code';
import { GetProductByCode } from '@application/product/services/get-product-by-code';
import { GetProducts } from '@application/product/services/get-products';
import { UpdateProductByCode } from '@application/product/services/update-product-by-code';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { GetProductByCodeController } from './controllers/get-product-by-code-controller';
import { DeleteProductByCodeController } from './controllers/delete-product-by-code-controller';
import { UpdateProductByCodeController } from './controllers/update-product-by-code-controller';
import { GetManyProductsController } from './controllers/get-many-products-controller';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './guards/api-key-guard';
import { GetServerStatusController } from './controllers/get-server-status-controller';
import { GetServerStatus } from '@application/server-status/services/get-server-status';

@Module({
  imports: [DatabaseModule],
  controllers: [
    GetProductByCodeController,
    DeleteProductByCodeController,
    UpdateProductByCodeController,
    GetManyProductsController,
    GetServerStatusController,
  ],
  providers: [
    CreateProduct,
    DeleteProductByCode,
    GetProductByCode,
    GetProducts,
    UpdateProductByCode,
    GetServerStatus,
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    },
  ],
})
export class HttpModule {}
