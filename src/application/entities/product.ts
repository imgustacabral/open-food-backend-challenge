import { randomUUID } from 'node:crypto';

export type ProductStatus = 'draft' | 'trash' | 'published';

export interface IProduct {
  code: string;
  status?: ProductStatus;
  importedT?: Date;
  url: string;
  creator: string;
  createdT: Date;
  lastModifiedT: Date;
  productName: string;
  quantity: string;
  brands: string;
  categories: string;
  labels: string;
  cities: string;
  purchasePlaces: string;
  stores: string;
  ingredientsText: string;
  traces: string;
  servingSize: string;
  servingQuantity: number;
  nutriscoreScore: number;
  nutriscoreGrade: string;
  mainCategory: string;
  imageUrl: string;
}

export class Product {
  private _id: string;
  private props: IProduct;

  constructor(props: IProduct, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();

    if (this.props.importedT === undefined) {
      this.props.importedT = new Date();
    }

    if (this.props.status === undefined) {
      this.props.status = 'published';
    }
  }

  get id(): string {
    return this._id;
  }

  get code(): string {
    return this.props.code;
  }

  get status(): ProductStatus {
    return this.props.status ?? 'published';
  }

  set status(value: ProductStatus) {
    this.props.status = value;
  }

  get importedT(): Date {
    return this.props.importedT ?? new Date();
  }

  set importedT(value: Date) {
    this.props.importedT = value;
  }

  get url(): string {
    return this.props.url;
  }

  get creator(): string {
    return this.props.creator;
  }

  get createdT(): number {
    return this.props.createdT.getTime();
  }

  get lastModifiedT(): number {
    return this.props.lastModifiedT.getTime();
  }

  set lastModifiedT(value: Date) {
    this.props.lastModifiedT = value;
  }

  get productName(): string {
    return this.props.productName;
  }

  set productName(value: string) {
    this.props.productName = value;
  }

  get quantity(): string {
    return this.props.quantity;
  }

  set quantity(value: string) {
    this.props.quantity = value;
  }

  get brands(): string {
    return this.props.brands;
  }

  set brands(value: string) {
    this.props.brands = value;
  }

  get categories(): string {
    return this.props.categories;
  }

  set categories(value: string) {
    this.props.categories = value;
  }

  get labels(): string {
    return this.props.labels;
  }

  set labels(value: string) {
    this.props.labels = value;
  }

  get cities(): string {
    return this.props.cities;
  }

  set cities(value: string) {
    this.props.cities = value;
  }

  get purchasePlaces(): string {
    return this.props.purchasePlaces;
  }

  set purchasePlaces(value: string) {
    this.props.purchasePlaces = value;
  }

  get stores(): string {
    return this.props.stores;
  }

  set stores(value: string) {
    this.props.stores = value;
  }

  get ingredientsText(): string {
    return this.props.ingredientsText;
  }

  set ingredientsText(value: string) {
    this.props.ingredientsText = value;
  }

  get traces(): string {
    return this.props.traces;
  }

  set traces(value: string) {
    this.props.traces = value;
  }

  get servingSize(): string {
    return this.props.servingSize;
  }

  set servingSize(value: string) {
    this.props.servingSize = value;
  }

  get servingQuantity(): number {
    return this.props.servingQuantity;
  }

  set servingQuantity(value: number) {
    this.props.servingQuantity = value;
  }

  get nutriscoreScore(): number {
    return this.props.nutriscoreScore;
  }

  set nutriscoreScore(value: number) {
    this.props.nutriscoreScore = value;
  }

  get nutriscoreGrade(): string {
    return this.props.nutriscoreGrade;
  }

  set nutriscoreGrade(value: string) {
    this.props.nutriscoreGrade = value;
  }

  get mainCategory(): string {
    return this.props.mainCategory;
  }

  set mainCategory(value: string) {
    this.props.mainCategory = value;
  }

  get imageUrl(): string {
    return this.props.imageUrl;
  }

  set imageUrl(value: string) {
    this.props.imageUrl = value;
  }
}
