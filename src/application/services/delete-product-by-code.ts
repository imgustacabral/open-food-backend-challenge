import { Product } from '@application/entities/product';
import { ProductsRepository } from '@application/repositories/products-repository';
import { Injectable } from '@nestjs/common';

interface DeleteProductByCodeRequest {
  code: string;
}

type DeleteProductByCodeResponse = Promise<Product>;

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

    return product;
  }
}
