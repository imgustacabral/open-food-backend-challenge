import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let server: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    server = app.getHttpServer();
  });

  it('/ (GET)', () => {
    return request(server)
      .get('/')
      .set('Authorization', `Bearer ${process.env.API_KEY}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.api_status).toEqual('ok');
        expect(res.body.db_connection).toEqual('ok');
      });
  });

  it('/products (GET)', () => {
    return request(server)
      .get('/products?skip=0&take=1')
      .set('Authorization', `Bearer ${process.env.API_KEY}`)
      .expect(200)
      .expect((res) => {
        expect(res.body[0]).toHaveProperty('code');
        expect(res.body[0]).toHaveProperty('status');
        expect(res.body[0]).toHaveProperty('imported_t');
      });
  });

  const productToUpdate = {
    code: '0000000010313',
    status: 'published',
    imported_t: '2023-07-17T02:18:11.111Z',
    url: 'http://world-en.openfoodfacts.org/product/8032880770355/dried-figs',
    creator: 'org-database-usda',
    created_t: 1587675967000,
    last_modified_t: 1587675967000,
    product_name: 'Dried figs',
    quantity: '',
    brands: 'gugu',
    categories: 'Snacks',
    labels: '',
    cities: '',
    purchase_places: '',
    stores: '',
    ingredients_text:
      'Dried figs from calabria (italy) (100%), preservative: e220.',
    traces: '',
    serving_size: '',
    serving_quantity: 0,
    nutriscore_score: 0,
    nutriscore_grade: '',
    main_category: 'en:snacks',
    image_url: '',
  };

  it('/products/:code (PUT)', () => {
    return request(server)
      .put('/products/' + productToUpdate.code)
      .set('Authorization', `Bearer ${process.env.API_KEY}`)
      .send(productToUpdate)
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(productToUpdate);
      });
  });

  it('/products/:code (GET)', () => {
    return request(server)
      .get('/products/' + productToUpdate.code)
      .set('Authorization', `Bearer ${process.env.API_KEY}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.brands).toEqual('gugu');
      });
  });
  it('/products/:code (DELETE)', () => {
    return request(server)
      .delete('/products/' + productToUpdate.code)
      .set('Authorization', `Bearer ${process.env.API_KEY}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.status).toEqual('trash');
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
