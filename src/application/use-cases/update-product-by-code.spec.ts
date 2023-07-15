import { makeProduct } from '@test/factories/product-factory';
import { InMemoryProductsRepository } from '@test/repositories/in-memory-products-repository';
import { UpdateProductByCode } from './update-product-by-code';

describe('Update Product By Code', () => {
  it('should be able to update a product by code using repository', async () => {
    const productsRepository = new InMemoryProductsRepository();
    const updateProductByCode = new UpdateProductByCode(productsRepository);

    const product = makeProduct();
    await productsRepository.save(product);

    const updatedProductData = {
      productName: 'New Product Name',
      quantity: 'New Quantity',
    };

    await updateProductByCode.execute({
      code: product.code,
      updates: updatedProductData,
    });

    const updatedProduct = await productsRepository.findByCode(product.code);

    expect(updatedProduct?.productName).toBe(updatedProductData.productName);
    expect(updatedProduct?.quantity).toBe(updatedProductData.quantity);
  });

  it('should throw an error if product is not found', async () => {
    const productsRepository = new InMemoryProductsRepository();
    const updateProductByCode = new UpdateProductByCode(productsRepository);

    const updatedProductData = {
      productName: 'New Product Name',
      quantity: 'New Quantity',
    };

    await expect(
      updateProductByCode.execute({ code: 1234, updates: updatedProductData }),
    ).rejects.toThrow('Product not found');
  });
});
