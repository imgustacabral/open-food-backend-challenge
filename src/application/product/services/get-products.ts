import { Product } from '@application/product/entities/product';
import { ProductsRepository } from '@application/product/repositories/products-repository';
import { Injectable } from '@nestjs/common';

interface GetProductsRequest {
  pageNumber: number;
  pageSize: number;
}

type GetProductsResponse = Promise<Product[]>;

@Injectable()
export class GetProducts {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute({
    pageNumber,
    pageSize,
  }: GetProductsRequest): GetProductsResponse {
    return await this.productsRepository.findAll(pageNumber, pageSize);
  }
}
