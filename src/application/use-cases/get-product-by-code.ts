import { Product } from '@application/entities/product';
import { ProductsRepository } from '@application/repositories/products-repository';
import { Injectable } from '@nestjs/common';

interface GetProductByCodeRequest {
  code: number;
}

type GetProductByCodeResponse = Promise<Product | null>;

@Injectable()
export class GetProductByCode {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute({ code }: GetProductByCodeRequest): GetProductByCodeResponse {
    return await this.productsRepository.findByCode(code);
  }
}
