import {
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { ProductViewModel } from '../view-model/product-view-model';
import { GetProductByCode } from '@application/product/services/get-product-by-code';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ProductDto } from '../dtos/product-dto';
import { ProductNotFound } from '@common/errors/ProductNotFound';

@ApiTags('Products')
@Controller('products')
export class GetProductByCodeController {
  constructor(private readonly getProductByCode: GetProductByCode) {}

  @Get('/:code')
  @ApiBearerAuth()
  @ApiParam({
    name: 'code',
    required: true,
    description: 'The code of the product',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the product details',
    type: ProductDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
    schema: {
      example: {
        message: 'Product with code 000000 was not found',
        error: 'Not Found',
        statusCode: 404,
      },
    },
  })
  @ApiOperation({ summary: 'Get a product by its code' })
  async execute(@Param('code') code: string) {
    try {
      const product = await this.getProductByCode.execute({
        code: code,
      });

      return ProductViewModel.toHTTP(product);
    } catch (error) {
      if (error instanceof ProductNotFound) {
        throw new NotFoundException(`Product with code ${code} was not found`);
      }

      throw new InternalServerErrorException('Internal server erro');
    }
  }
}
