import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductViewModel } from '../view-model/product-view-model';
import { SearchProductsRepository } from '@application/product/repositories/search-repository';

@ApiTags('Products')
@Controller('/search')
export class SearchProductController {
  constructor(
    private readonly searchProductsRepository: SearchProductsRepository,
  ) {}

  @Get('/product')
  @ApiOperation({ summary: 'Search for products' })
  @ApiResponse({
    status: 200,
    description: 'Returns the search results.',
  })
  async search(@Query('text') text: string) {
    const results = await this.searchProductsRepository.search(text);

    return results.map((product) => ProductViewModel.toHTTP(product));
  }
}
