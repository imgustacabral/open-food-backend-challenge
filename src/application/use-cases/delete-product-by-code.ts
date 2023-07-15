import { ProductsRepository } from '@application/repositories/products-repository';
import { Injectable } from '@nestjs/common';

interface DeleteProductByCodeRequest {
  code: number;
}

type DeleteProductByCodeResponse = Promise<void>;

@Injectable()
export class DeleteProductByCode {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute({
    code,
  }: DeleteProductByCodeRequest): DeleteProductByCodeResponse {
    const product = await this.productsRepository.findByCode(code);

    if (!product) {
      throw new Error('Product not found');
    }

    product.status = 'trash';

    await this.productsRepository.save(product);
  }
}
