import { makeProduct } from '@test/factories/product-factory';
import { InMemorySearchProductsRepository } from '@test/repositories/in-memory-search-products-repository';
import { SearchProduct } from './search-product';
import { IndexProduct } from './index-product';

describe('Search Product', () => {
  it('should be able to search a product using repository', async () => {
    const searchProductsRepository = new InMemorySearchProductsRepository();
    const indexProduct = new IndexProduct(searchProductsRepository);
    const searchProduct = new SearchProduct(searchProductsRepository);

    const product = makeProduct();

    await indexProduct.execute({ product });

    const searchedProduct = await searchProduct.execute({
      text: product.productName,
    });

    expect(searchedProduct).toHaveLength(1);
    expect(searchedProduct[0].productName).toBe(product.productName);
    expect(searchedProduct[0].categories).toBe(product.categories);
  });

  it('should return empty array if no product matches the search', async () => {
    const searchProductsRepository = new InMemorySearchProductsRepository();
    const searchProduct = new SearchProduct(searchProductsRepository);

    const searchedProduct = await searchProduct.execute({
      text: 'nonexistent',
    });

    expect(searchedProduct).toHaveLength(0);
  });
});
