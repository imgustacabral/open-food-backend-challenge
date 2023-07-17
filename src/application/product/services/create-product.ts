import { Product } from '@application/product/entities/product';
import { ProductsRepository } from '@application/product/repositories/products-repository';
import { Injectable } from '@nestjs/common';

interface CreateProductRequest {
  product: Product;
}

type CreateProductResponse = Promise<Product>;

@Injectable()
export class CreateProduct {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute({ product }: CreateProductRequest): CreateProductResponse {
    return await this.productsRepository.save(product);
  }
}
