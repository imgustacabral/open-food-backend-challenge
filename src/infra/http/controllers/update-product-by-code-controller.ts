import {
  Body,
  Param,
  Controller,
  Put,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { UpdateProductByCode } from '@application/product/services/update-product-by-code';
import { ProductViewModel } from '@infra/http/view-model/product-view-model';
import { ProductDto } from '../dtos/product-dto';
import {
  ApiParam,
  ApiBody,
  ApiOperation,
  ApiTags,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ProductNotFound } from '@common/errors/ProductNotFound';

@ApiTags('Products')
@Controller('products')
export class UpdateProductByCodeController {
  constructor(private readonly updateProductByCode: UpdateProductByCode) {}

  @Put(':code')
  @ApiBearerAuth()
  @ApiParam({
    name: 'code',
    required: true,
    description: 'The code of the product',
  })
  @ApiBody({
    type: ProductDto,
  })
  @ApiResponse({
    type: ProductDto,
  })
  @ApiOperation({ summary: 'Update a product by its code' })
  async execute(@Param('code') code: string, @Body() body: ProductDto) {
    const updates = ProductViewModel.toDomain(body);

    try {
      const product = await this.updateProductByCode.execute({
        code,
        updates: {
          ...updates,
        },
      });

      if (product) {
        return ProductViewModel.toHTTP(product);
      }
    } catch (error) {
      if (error instanceof ProductNotFound) {
        throw new NotFoundException(`Product with code ${code} was not found`);
      }

      throw new InternalServerErrorException('Internal server erro');
    }
  }
}
