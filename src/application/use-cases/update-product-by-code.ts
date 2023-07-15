import { IProduct } from '@application/entities/product';
import { ProductsRepository } from '@application/repositories/products-repository';
import { Injectable } from '@nestjs/common';

interface UpdateProductByCodeRequest {
  code: number;
  updates: Partial<IProduct>;
}

type UpdateProductByCodeResponse = Promise<void>;

@Injectable()
export class UpdateProductByCode {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute({
    code,
    updates,
  }: UpdateProductByCodeRequest): UpdateProductByCodeResponse {
    const product = await this.productsRepository.findByCode(code);

    if (!product) {
      throw new Error('Product not found');
    }

    Object.assign(product, updates);

    await this.productsRepository.save(product);
  }
}
