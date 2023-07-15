import { makeProduct } from '@test/factories/product-factory';
import { InMemoryProductsRepository } from '@test/repositories/in-memory-products-repository';
import { GetProducts } from './get-products';

describe('Get Products', () => {
  it('should be able to get all products using repository', async () => {
    const productsRepository = new InMemoryProductsRepository();
    const getProducts = new GetProducts(productsRepository);

    const product1 = makeProduct();
    const product2 = makeProduct({ code: 2 });
    await productsRepository.save(product1);
    await productsRepository.save(product2);

    const retrievedProducts = await getProducts.execute({
      pageNumber: 1,
      pageSize: 2,
    });

    expect(retrievedProducts).toEqual([product1, product2]);
  });

  it('should return an empty array when no products are available', async () => {
    const productsRepository = new InMemoryProductsRepository();
    const getProducts = new GetProducts(productsRepository);

    const retrievedProducts = await getProducts.execute({
      pageNumber: 1,
      pageSize: 2,
    });

    expect(retrievedProducts).toEqual([]);
  });
});
