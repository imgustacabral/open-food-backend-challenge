import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/services/prisma.service';
import { ProductsRepository } from '@application/product/repositories/products-repository';
import { PrismaProductsRepository } from './prisma/repositories/prisma-products-repository';
import { ServerStatusRepository } from '@application/server-status/repositories/server-status-repository';
import { PrismaServerStatusRepository } from './prisma/repositories/prisma-server-status-repository';
import { CronJobRepository } from '@application/server-status/repositories/cron-job-repository';
import { PrismaCronJobRepository } from './prisma/repositories/prisma-cron-job-repository';

@Module({
  controllers: [],
  providers: [
    PrismaService,
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
  ],
  exports: [ProductsRepository, ServerStatusRepository, CronJobRepository],
})
export class DatabaseModule {}
