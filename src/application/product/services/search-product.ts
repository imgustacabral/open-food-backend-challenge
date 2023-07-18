import { Product } from '@application/product/entities/product';
import { SearchProductsRepository } from '@application/product/repositories/search-repository';
import { Injectable } from '@nestjs/common';

interface SearchProductRequest {
  text: string;
}

type SearchProductResponse = Promise<Product[]>;

@Injectable()
export class SearchProduct {
  constructor(
    private readonly searchProductsRepository: SearchProductsRepository,
  ) {}

  async execute({ text }: SearchProductRequest): SearchProductResponse {
    return await this.searchProductsRepository.search(text);
  }
}
