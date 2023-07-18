import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/services/prisma.service';
import { ProductsRepository } from '@application/product/repositories/products-repository';
import { PrismaProductsRepository } from './prisma/repositories/prisma-products-repository';
import { ServerStatusRepository } from '@application/server-status/repositories/server-status-repository';
import { PrismaServerStatusRepository } from './prisma/repositories/prisma-server-status-repository';
import { CronJobRepository } from '@application/server-status/repositories/cron-job-repository';
import { PrismaCronJobRepository } from './prisma/repositories/prisma-cron-job-repository';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ElasticsearchProductsRepository } from './elasticsearch/repositories/elasticsearch-products-repository';
import { SearchProductsRepository } from '@application/product/repositories/search-repository';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: process.env.ELASTICSEARCH_URL,
    }),
  ],
  controllers: [],
  providers: [
    PrismaService,
    ElasticsearchProductsRepository,
    {
      provide: ServerStatusRepository,
      useClass: PrismaServerStatusRepository,
    },
    {
      provide: ProductsRepository,
      useClass: PrismaProductsRepository,
    },
    {
      provide: CronJobRepository,
      useClass: PrismaCronJobRepository,
    },
    {
      provide: SearchProductsRepository,
      useClass: ElasticsearchProductsRepository,
    },
  ],
  exports: [
    ProductsRepository,
    ServerStatusRepository,
    CronJobRepository,
    SearchProductsRepository,
  ],
})
export class DatabaseModule {}
