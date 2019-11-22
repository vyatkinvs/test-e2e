import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { UserService } from '../src/common/user/user.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const userService = {
    validate: () => {
      return { token: 'I feel good' };
    },
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).overrideProvider(UserService)
      .useValue(userService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });
  it('v1/user/test', () => {
    return request(app.getHttpServer()).get('/v1/user/test').expect('Hello World');
  })

  it('/ (POST) v1/user/login', () => {
    return request(app.getHttpServer())
      .post('/v1/user/login')
      .expect(201)
      .expect({ token: 'I feel good' });
  });
  afterAll(async () => {
    await app.close();
  });
});
