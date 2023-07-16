import { makeProduct } from '@test/factories/product-factory';
import { InMemoryProductsRepository } from '@test/repositories/in-memory-products-repository';
import { DeleteProductByCode } from './delete-product-by-code';

describe('Delete Product By Code', () => {
  it('should be able to delete a product by code using repository', async () => {
    const productsRepository = new InMemoryProductsRepository();
    const deleteProductByCode = new DeleteProductByCode(productsRepository);

    const product = makeProduct();
    await productsRepository.save(product);

    await deleteProductByCode.execute({ code: product.code });

    const deletedProduct = await productsRepository.findByCode(product.code);

    expect(deletedProduct?.status).toBe('trash');
  });

  it('should throw an error if product is not found', async () => {
    const productsRepository = new InMemoryProductsRepository();
    const deleteProductByCode = new DeleteProductByCode(productsRepository);

    await expect(deleteProductByCode.execute({ code: '1234' })).rejects.toThrow(
      'Product not found',
    );
  });
});
