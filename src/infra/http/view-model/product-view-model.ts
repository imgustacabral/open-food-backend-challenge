import { IProduct, Product } from '@application/product/entities/product';

export class ProductViewModel {
  static toHTTP(product: Product) {
    return {
      code: product.code,
      status: product.status.toLowerCase(),
      imported_t: product.importedT,
      url: product.url,
      creator: product.creator,
      created_t: new Date(product.createdT).getTime(),
      last_modified_t: new Date(product.lastModifiedT).getTime(),
      product_name: product.productName,
      quantity: product.quantity,
      brands: product.brands,
      categories: product.categories,
      labels: product.labels,
      cities: product.cities,
      purchase_places: product.purchasePlaces,
      stores: product.stores,
      ingredients_text: product.ingredientsText,
      traces: product.traces,
      serving_size: product.servingSize,
      serving_quantity: product.servingQuantity,
      nutriscore_score: product.nutriscoreScore,
      nutriscore_grade: product.nutriscoreGrade,
      main_category: product.mainCategory,
      image_url: product.imageUrl,
    };
  }
  static toDomain(input: any): Product {
    const productProps: IProduct = {
      code: String(input.code.replace(/\s/g, '').replaceAll(`"`, '')),
      url: input.url,
      creator: input.creator,
      createdT: new Date(Number(input.created_t)),
      importedT: new Date(input.imported_t),
      lastModifiedT: new Date(Number(input.last_modified_t)),
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
