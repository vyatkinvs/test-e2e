import { Injectable } from '@nestjs/common';
import * as randomstring from 'randomstring';

@Injectable()
export class UserTokenService {
  getToken(): string {
    return randomstring.generate();
  }
}

