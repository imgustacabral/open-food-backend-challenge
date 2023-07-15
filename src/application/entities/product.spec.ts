import { makeProduct } from '@test/factories/product-factory';

describe('Product', () => {
  it('should be able to create a product', () => {
    const product = makeProduct();

    expect(product).toBeTruthy();
  });

  it('should be able to change the status of a product', () => {
    const product = makeProduct();

    product.status = 'draft';

    expect(product.status).toBe('draft');
  });

  it('should be able to update the lastModifiedT of a product', () => {
    const product = makeProduct();

    const newLastModifiedT = 456;
    product.lastModifiedT = newLastModifiedT;

    expect(product.lastModifiedT).toBe(newLastModifiedT);
  });

  it('should be able to change the productName of a product', () => {
    const product = makeProduct();

    const newProductName = 'newProductName';
    product.productName = newProductName;

    expect(product.productName).toBe(newProductName);
  });

  it('should be able to change the quantity of a product', () => {
    const product = makeProduct();

    const newQuantity = 'newQuantity';
    product.quantity = newQuantity;

    expect(product.quantity).toBe(newQuantity);
  });
});
