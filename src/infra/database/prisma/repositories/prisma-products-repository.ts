import { Product } from '@application/product/entities/product';
import { ProductsRepository } from '@application/product/repositories/products-repository';

import { Injectable } from '@nestjs/common';
import { PrismaProductMapper } from '../mappers/prisma-product-mapper';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class PrismaProductsRepository implements ProductsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(pageNumber = 1, pageSize = 10): Promise<Product[]> {
    pageNumber = Math.max(1, pageNumber);
    pageSize = Math.max(1, pageSize);

    const products = await this.prisma.product.findMany({
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
    });
    return products.map(PrismaProductMapper.toDomain);
  }

  async findByCode(code: string): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
      where: { code },
    });

    if (!product) {
      return null;
    }

    return PrismaProductMapper.toDomain(product);
  }

  async save(product: Product): Promise<Product> {
    const existingProduct = await this.prisma.product.findUnique({
      where: { code: product.code },
    });

    const data = PrismaProductMapper.toPersistence(product);

    if (existingProduct) {
      await this.prisma.product.update({
        where: { code: product.code },
        data: { ...data },
      });
    } else {
      await this.prisma.product.create({ data });
    }

    return product;
  }
}
