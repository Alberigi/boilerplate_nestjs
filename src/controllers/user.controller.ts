import { Controller, Get } from '@nestjs/common';
import { IUserService, IUser } from '../domains/interfaces';

@Controller('user')
export class UserController {
  constructor(private readonly userService: IUserService) {}

  @Get('getOne')
  getOne(): IUser {
    return this.userService.getOne();
  }
}
