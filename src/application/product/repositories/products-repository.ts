import { Product } from '@application/product/entities/product';

export abstract class ProductsRepository {
  abstract findByCode(code: string): Promise<Product | null>;
  abstract save(product: Product): Promise<Product>;
  abstract findAll(pageNumber: number, pageSize: number): Promise<Product[]>;
}
