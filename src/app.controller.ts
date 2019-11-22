import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Redirect } from '@nestjs/common/decorators/http/redirect.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
