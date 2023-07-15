import { IProduct, Product } from '@application/entities/product';

type Override = Partial<IProduct>;

export function makeProduct(override: Override = {}) {
  return new Product({
    code: 123,
    status: 'published',
    importedT: new Date(),
    url: 'url',
    creator: 'creator',
    createdT: 123,
    lastModifiedT: 123,
    productName: 'productName',
    quantity: 'quantity',
    brands: 'brands',
    categories: 'categories',
    labels: 'labels',
    cities: 'cities',
    purchasePlaces: 'purchasePlaces',
    stores: 'stores',
    ingredientsText: 'ingredientsText',
    traces: 'traces',
    servingSize: 'servingSize',
    servingQuantity: 123,
    nutriscoreScore: 123,
    nutriscoreGrade: 'nutriscoreGrade',
    mainCategory: 'mainCategory',
    imageUrl: 'imageUrl',
    ...override,
  });
}
