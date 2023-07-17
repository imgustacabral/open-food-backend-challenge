import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsUrl } from 'class-validator';

export class ProductDto {
  @ApiProperty()
  @IsString()
  code: string;

  @ApiProperty()
  @IsUrl()
  url: string;

  @ApiProperty()
  @IsString()
  creator: string;

  @ApiProperty()
  @IsNumber()
  created_t: number;

  @ApiProperty()
  @IsNumber()
  last_modified_t: number;

  @ApiProperty()
  @IsString()
  product_name: string;

  @ApiProperty()
  @IsString()
  quantity: string;

  @ApiProperty()
  @IsString()
  brands: string;

  @ApiProperty()
  @IsString()
  categories: string;

  @ApiProperty()
  @IsString()
  labels: string;

  @ApiProperty()
  @IsString()
  cities: string;

  @ApiProperty()
  @IsString()
  purchase_places: string;

  @ApiProperty()
  @IsString()
  stores: string;

  @ApiProperty()
  @IsString()
  ingredients_text: string;

  @ApiProperty()
  @IsString()
  traces: string;

  @ApiProperty()
  @IsString()
  serving_size: string;

  @ApiProperty()
  @IsNumber()
  serving_quantity: number;

  @ApiProperty()
  @IsNumber()
  nutriscore_score: number;

  @ApiProperty()
  @IsString()
  nutriscore_grade: string;

  @ApiProperty()
  @IsString()
  main_category: string;

  @ApiProperty()
  @IsString()
  image_url: string;
}
