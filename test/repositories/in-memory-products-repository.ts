import { Product } from '@application/entities/product';
import { ProductsRepository } from '@application/repositories/products-repository';

export class InMemoryProductsRepository implements ProductsRepository {
  public products: Product[] = [];

  async findByCode(code: number): Promise<Product | null> {
    const product = this.products.find((item) => item.code === code);

    if (!product) {
      return null;
    }

    return product;
  }

  async save(product: Product): Promise<void> {
    const productIndex = this.products.findIndex(
      (item) => item.code === product.code,
    );

    if (productIndex !== -1) {
      this.products[productIndex] = product;
    } else {
      this.products.push(product);
    }
  }
}
