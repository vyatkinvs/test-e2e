import { UserTokenService } from './user-token.service';

describe('UserService', () => {
  let tokenService: UserTokenService;

  beforeEach(async () => {
    tokenService = new UserTokenService();
  });

  describe('getNull', () => {
    it('should return string', () => {
      expect(tokenService.getToken()).toBeDefined();
    });
  });
});
