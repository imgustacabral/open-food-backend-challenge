import { Product } from '@application/product/entities/product';
import { SearchProductsRepository } from '@application/product/repositories/search-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InMemorySearchProductsRepository
  implements SearchProductsRepository
{
  public products: Product[] = [];

  async index(product: Product) {
    this.products.push(product);
  }

  async search(text: string) {
    const search = this.products.filter(
      (product) =>
        product.productName.toLowerCase().includes(text.toLowerCase()) ||
        product.categories.toLowerCase().includes(text.toLowerCase()),
    );

    return search;
  }
}
