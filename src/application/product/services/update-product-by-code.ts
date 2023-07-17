import { IProduct, Product } from '@application/product/entities/product';
import { ProductsRepository } from '@application/product/repositories/products-repository';
import { ProductNotFound } from '@common/errors/ProductNotFound';
import { Injectable } from '@nestjs/common';

interface UpdateProductByCodeRequest {
  code: string;
  updates: Partial<IProduct>;
}

type UpdateProductByCodeResponse = Promise<Product | null>;

@Injectable()
export class UpdateProductByCode {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute({
    code,
    updates,
  }: UpdateProductByCodeRequest): UpdateProductByCodeResponse {
    const product = await this.productsRepository.findByCode(code);

    if (!product) {
      throw new ProductNotFound();
    }

    Object.assign(product, updates);

    const updatedProduct = await this.productsRepository.save(product);

    return updatedProduct;
  }
}
