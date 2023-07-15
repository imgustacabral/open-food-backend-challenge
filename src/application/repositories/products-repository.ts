import { Product } from '@application/entities/product';

export abstract class ProductsRepository {
  abstract findByCode(code: number): Promise<Product | null>;
  abstract save(product: Product): Promise<void>;
  abstract findAll(pageNumber: number, pageSize: number): Promise<Product[]>;
}
