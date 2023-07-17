import { Controller, Get, Query } from '@nestjs/common';
import { ProductViewModel } from '../view-model/product-view-model';
import { GetProducts } from '@application/product/services/get-products';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { ProductDto } from '../dtos/product-dto';

@ApiTags('Products')
@Controller('products')
export class GetManyProductsController {
  constructor(private readonly getProducts: GetProducts) {}

  @Get('/')
  @ApiBearerAuth()
  @ApiQuery({
    name: 'skip',
    required: false,
    description: 'The number of items to skip',
    type: Number,
    example: 0,
  })
  @ApiQuery({
    name: 'take',
    required: false,
    description: 'The number of items to take',
    type: Number,
    example: 10,
  })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of products',
    type: [ProductDto],
  })
  @ApiOperation({ summary: 'Get a list of products with pagination' })
  async execute(
    @Query('skip') skip = 0,
    @Query('take') take = 10,
  ): Promise<ProductViewModel[]> {
    if (take > 100) {
      take = 100;
    }
    const products = await this.getProducts.execute({
      pageNumber: skip / take + 1,
      pageSize: take,
    });

    return products.map((product) => ProductViewModel.toHTTP(product));
  }
}
