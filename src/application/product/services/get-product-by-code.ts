import { Product } from '@application/product/entities/product';
import { ProductsRepository } from '@application/product/repositories/products-repository';
import { ProductNotFound } from '@common/errors/ProductNotFound';
import { Injectable } from '@nestjs/common';

interface GetProductByCodeRequest {
  code: string;
}

type GetProductByCodeResponse = Promise<Product>;

@Injectable()
export class GetProductByCode {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute({ code }: GetProductByCodeRequest): GetProductByCodeResponse {
    const product = await this.productsRepository.findByCode(code);

    if (!product) {
      throw new ProductNotFound();
    }

    return product;
  }
}
