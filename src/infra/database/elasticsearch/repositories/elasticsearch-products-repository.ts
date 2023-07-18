import { Product } from '@application/product/entities/product';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ElasticsearchProductMapper } from '../mappers/elasticsearch-product-mapper';
import { SearchProductsRepository } from '@application/product/repositories/search-repository';

@Injectable()
export class ElasticsearchProductsRepository
  implements OnModuleInit, SearchProductsRepository
{
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async onModuleInit() {
    try {
      if (
        !(await this.elasticsearchService.indices.exists({ index: 'products' }))
      ) {
        await this.elasticsearchService.indices.create({ index: 'products' });
      }
    } catch {}
  }
  async index(product: Product) {
    const productToIndex = ElasticsearchProductMapper.toPersistence(product);
    await this.elasticsearchService.index({
      index: 'products',
      document: {
        doc: productToIndex,
      },
    });
  }

  async search(text: string) {
    const search = await this.elasticsearchService.search({
      index: 'products',
      body: {
        query: {
          multi_match: {
            query: text,
            fields: ['*'],
            fuzziness: 'AUTO',
          },
        },
      },
    });

    return search.hits.hits.map((hit: any) => hit._source.doc);
  }
}
