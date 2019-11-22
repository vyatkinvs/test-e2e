import { UserController } from './user.controller';
import { UserService } from '../../../common/user/user.service';
import { Login } from './login';
import { UserTokenService } from '../../../common/user/token/user-token.service';
import { UserToken } from '../../../common/user/token/user-token';

describe('AppController', () => {
  let userController: UserController;
  let userService: UserService;
  const result: UserToken = { token: 'qwe' };

  beforeAll(async () => {
    const fakeToken = { getToken: () => 'qwe' };
    userService = new UserService(fakeToken as UserTokenService);
    userController = new UserController(userService);
  });

  describe('getQweToken', () => {
    const login: Login = { username: 'admin@admin.ru', password: '12345678' };
    it('should return { token: qwe}', () => {
      expect(userController.login(login)).toEqual(result);
    });
  });
});
