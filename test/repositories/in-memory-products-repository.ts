import { Product } from '@application/product/entities/product';
import { ProductsRepository } from '@application/product/repositories/products-repository';

export class InMemoryProductsRepository implements ProductsRepository {
  public products: Product[] = [];

  async findAll(pageNumber = 1, pageSize = 10): Promise<Product[]> {
    pageNumber = Math.max(1, pageNumber);
    pageSize = Math.max(1, pageSize);

    const startIndex = (pageNumber - 1) * pageSize;

    return this.products.slice(startIndex, startIndex + pageSize);
  }

  async findByCode(code: string): Promise<Product | null> {
    const product = this.products.find((item) => item.code === code);

    if (!product) {
      return null;
    }

    return product;
  }

  async save(product: Product): Promise<Product> {
    const productIndex = this.products.findIndex(
      (item) => item.code === product.code,
    );

    if (productIndex !== -1) {
      this.products[productIndex] = product;
    } else {
      this.products.push(product);
    }

    return product;
  }
}
