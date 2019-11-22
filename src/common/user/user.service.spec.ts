import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserTokenService } from './token/user-token.service';
import { Login } from '../../versions/v1/controllers/login';

describe('UserService', () => {
  let userService: UserService;
  let tokenService: UserTokenService;

  beforeEach(async () => {
    tokenService = new UserTokenService();
    userService = new UserService(tokenService);
  });

  describe('getNull', () => {
    it('should return null', () => {
      const wrongLogin: Login = { username: 'admin@adm.ru', password: '12345678' };
      expect(userService.validate(wrongLogin)).toBeNull();
    });
  });
  describe('getToken', () => {
    it('should return Token', () => {
      const rightLogin: Login = { username: 'admin@admin.ru', password: '12345678' };
      expect(userService.validate(rightLogin)).toBeTruthy();
    });
  });
});
