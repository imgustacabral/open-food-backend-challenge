type Status = 'draft' | 'trash' | 'published';

export interface IProduct {
  code: number;
  status: Status;
  importedT: Date;
  url: string;
  creator: string;
  createdT: number;
  lastModifiedT: number;
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
    this._id = id ?? '';
    this.props = props;
  }

  get id(): string {
    return this._id;
  }

  get code(): number {
    return this.props.code;
  }

  get status(): Status {
    return this.props.status;
  }

  set status(value: Status) {
    this.props.status = value;
  }

  get importedT(): Date {
    return this.props.importedT;
  }

  get url(): string {
    return this.props.url;
  }

  get creator(): string {
    return this.props.creator;
  }

  get createdT(): number {
    return this.props.createdT;
  }

  get lastModifiedT(): number {
    return this.props.lastModifiedT;
  }

  set lastModifiedT(value: number) {
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

  get categories(): string {
    return this.props.categories;
  }

  get labels(): string {
    return this.props.labels;
  }

  get cities(): string {
    return this.props.cities;
  }

  get purchasePlaces(): string {
    return this.props.purchasePlaces;
  }

  get stores(): string {
    return this.props.stores;
  }

  get ingredientsText(): string {
    return this.props.ingredientsText;
  }

  get traces(): string {
    return this.props.traces;
  }

  get servingSize(): string {
    return this.props.servingSize;
  }

  get servingQuantity(): number {
    return this.props.servingQuantity;
  }

  get nutriscoreScore(): number {
    return this.props.nutriscoreScore;
  }

  get nutriscoreGrade(): string {
    return this.props.nutriscoreGrade;
  }

  get mainCategory(): string {
    return this.props.mainCategory;
  }

  get imageUrl(): string {
    return this.props.imageUrl;
  }
}
