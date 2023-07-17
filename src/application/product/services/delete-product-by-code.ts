import { Product } from '@application/product/entities/product';
import { ProductsRepository } from '@application/product/repositories/products-repository';
import { Injectable } from '@nestjs/common';
import { ProductNotFound } from '@common/errors/ProductNotFound';

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
      throw new ProductNotFound();
    }

    product.status = 'trash';

    await this.productsRepository.save(product);

    return product;
  }
}
