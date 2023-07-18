import { Product } from '@application/product/entities/product';

export abstract class SearchProductsRepository {
  abstract index(product: Product): Promise<void>;
  abstract search(text: string): Promise<Product[]>;
}
