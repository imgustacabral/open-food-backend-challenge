import { IProduct, Product } from '@application/product/entities/product';

export class ProductCronMapper {
  static toDomain(input: any): Product {
    const productProps: IProduct = {
      code: String(input.code.replace(/\s/g, '').replaceAll(`"`, '')),
      url: input.url,
      creator: input.creator,
      createdT: new Date(Number(input.created_t) * 1000),
      lastModifiedT: new Date(Number(input.last_modified_t) * 1000),
      productName: input.product_name,
      quantity: input.quantity,
      brands: input.brands,
      categories: input.categories,
      labels: input.labels,
      cities: input.cities,
      purchasePlaces: input.purchase_places,
      stores: input.stores,
      ingredientsText: input.ingredients_text,
      traces: input.traces,
      servingSize: input.serving_size,
      servingQuantity: Number(input.serving_quantity),
      nutriscoreScore: Number(input.nutriscore_score),
      nutriscoreGrade: input.nutriscore_grade,
      mainCategory: input.main_category,
      imageUrl: input.image_url,
    };

    return new Product(productProps);
  }
}
