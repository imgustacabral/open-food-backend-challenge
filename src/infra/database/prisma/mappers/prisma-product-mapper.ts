import {
  IProduct,
  Product,
  ProductStatus,
} from '@application/product/entities/product';
import { Product as PrismaProduct } from '@prisma/client';

export class PrismaProductMapper {
  static toDomain(prismaProduct: PrismaProduct): Product {
    const productProps: IProduct = {
      code: prismaProduct.code,
      status: prismaProduct.status as ProductStatus,
      url: prismaProduct.url,
      creator: prismaProduct.creator,
      importedT: prismaProduct.importedT,
      createdT: new Date(prismaProduct.createdT),
      lastModifiedT: new Date(prismaProduct.lastModifiedT),
      productName: prismaProduct.productName,
      quantity: prismaProduct.quantity,
      brands: prismaProduct.brands,
      categories: prismaProduct.categories,
      labels: prismaProduct.labels,
      cities: prismaProduct.cities,
      purchasePlaces: prismaProduct.purchasePlaces,
      stores: prismaProduct.stores,
      ingredientsText: prismaProduct.ingredientsText,
      traces: prismaProduct.traces,
      servingSize: prismaProduct.servingSize,
      servingQuantity: prismaProduct.servingQuantity,
      nutriscoreScore: prismaProduct.nutriscoreScore,
      nutriscoreGrade: prismaProduct.nutriscoreGrade,
      mainCategory: prismaProduct.mainCategory,
      imageUrl: prismaProduct.imageUrl,
    };

    return new Product(productProps);
  }
  static toPersistence(product: Product): PrismaProduct {
    const prismaProduct: PrismaProduct = {
      id: product.id,
      code: product.code,
      status: product.status.toUpperCase() as 'DRAFT' | 'TRASH' | 'PUBLISHED',
      importedT: new Date(product.importedT),
      url: product.url,
      creator: product.creator,
      createdT: new Date(product.createdT),
      lastModifiedT: new Date(product.lastModifiedT),
      productName: product.productName,
      quantity: product.quantity,
      brands: product.brands,
      categories: product.categories,
      labels: product.labels,
      cities: product.cities,
      purchasePlaces: product.purchasePlaces,
      stores: product.stores,
      ingredientsText: product.ingredientsText,
      traces: product.traces,
      servingSize: product.servingSize,
      servingQuantity: product.servingQuantity,
      nutriscoreScore: product.nutriscoreScore,
      nutriscoreGrade: product.nutriscoreGrade,
      mainCategory: product.mainCategory,
      imageUrl: product.imageUrl,
    };

    return prismaProduct;
  }
}
