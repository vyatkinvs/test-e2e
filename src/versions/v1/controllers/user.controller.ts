import { Body, Controller, Get, HttpException, HttpStatus, Logger, Post } from '@nestjs/common';
import { UserService } from '../../../common/user/user.service';
import { Login } from './login';
import { UserToken } from '../../../common/user/token/user-token';

@Controller('v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {
  }

  @Get('test')
  async test(): Promise<string> {
    return 'Hello World';
  }

  @Post('login')
  login(@Body() login: Login): UserToken | HttpException {
    Logger.error(`From login - ${JSON.stringify(login)}`);
    const getResult = this.userService.validate(login);
    if (getResult) {
      return getResult;
    } else {
      throw new HttpException({ error: 'Unauthorized' }, HttpStatus.UNAUTHORIZED);
    }
  }
}
