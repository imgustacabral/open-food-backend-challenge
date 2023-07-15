import { makeProduct } from '@test/factories/product-factory';
import { InMemoryProductsRepository } from '@test/repositories/in-memory-products-repository';
import { CreateProduct } from './create-product';

describe('Create Product', () => {
  it('should be able to create a product using repository', async () => {
    const productsRepository = new InMemoryProductsRepository();
    const createProduct = new CreateProduct(productsRepository);

    const product = makeProduct();

    await createProduct.execute({ product });

    expect(productsRepository.products[0]).toEqual(product);
  });
});
