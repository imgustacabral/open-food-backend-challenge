import { makeProduct } from '@test/factories/product-factory';
import { IndexProduct } from './index-product';
import { InMemorySearchProductsRepository } from '@test/repositories/in-memory-search-products-repository';

describe('Index Product', () => {
  it('should be able to index a product using repository', async () => {
    const searchProductsRepository = new InMemorySearchProductsRepository();
    const indexProduct = new IndexProduct(searchProductsRepository);

    const product = makeProduct();

    await indexProduct.execute({ product });

    expect(searchProductsRepository.products).toHaveLength(1);
  });
});
