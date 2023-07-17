import { Controller, Delete, NotFoundException, Param } from '@nestjs/common';
import { ProductViewModel } from '../view-model/product-view-model';
import { DeleteProductByCode } from '@application/product/services/delete-product-by-code';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ProductNotFound } from '@common/errors/ProductNotFound';
import { ProductDto } from '../dtos/product-dto';

@ApiTags('Products')
@Controller('products')
export class DeleteProductByCodeController {
  constructor(private readonly deleteProductByCode: DeleteProductByCode) {}

  @Delete('/:code')
  @ApiBearerAuth()
  @ApiParam({
    name: 'code',
    required: true,
    description: 'The code of the product',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the deleted product',
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
  @ApiOperation({ summary: 'Delete a product by its code' })
  async execute(@Param('code') code: string) {
    try {
      const product = await this.deleteProductByCode.execute({ code });
      return ProductViewModel.toHTTP(product);
    } catch (error) {
      if (error instanceof ProductNotFound) {
        throw new NotFoundException(`Product with code ${code} was not found`);
      }
    }
  }
}
