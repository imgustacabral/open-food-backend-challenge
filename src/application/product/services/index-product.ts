import { Product } from '@application/product/entities/product';
import { SearchProductsRepository } from '@application/product/repositories/search-repository';
import { Injectable } from '@nestjs/common';

interface IndexProductRequest {
  product: Product;
}

type IndexProductResponse = Promise<void>;

@Injectable()
export class IndexProduct {
  constructor(
    private readonly searchProductsRepository: SearchProductsRepository,
  ) {}

  async execute({ product }: IndexProductRequest): IndexProductResponse {
    await this.searchProductsRepository.index(product);
  }
}
