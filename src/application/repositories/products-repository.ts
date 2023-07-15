import { Product } from '@application/entities/product';

export abstract class ProductsRepository {
  abstract findByCode(code: string): Promise<Product | null>;
  abstract save(product: Product): Promise<void>;
}
