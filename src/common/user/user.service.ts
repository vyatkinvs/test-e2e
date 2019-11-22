import { Injectable, Logger } from '@nestjs/common';
import { User } from './user';
import { UserTokenService } from './token/user-token.service';
import { Login } from '../../versions/v1/controllers/login';
import { UserToken } from './token/user-token';

@Injectable()
export class UserService {
  private users = [
    new User('admin@admin.ru', '12345678'),
    new User('user@user.ru', '87654321'),
  ];

  constructor(
    private readonly userTokenService: UserTokenService,
  ) {
  }

  validate(login: Login): UserToken | null {
    const result = this.users.find( u => {
     return  u.email === login.username && u.password === login.password;
    });
    return result ? { token: this.userTokenService.getToken() } : null;
  }

}
