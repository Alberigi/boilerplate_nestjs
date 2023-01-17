import { Controller, Get } from '@nestjs/common';
import { IUserService, IUser } from '../../DOMAIN/interfaces';

@Controller('user')
export class UserController {
  constructor(private readonly userService: IUserService) {}

  @Get('getOne')
  getOne(): Promise<IUser> {
    return this.userService.getOne();
  }

  @Get('getAll')
  getAll(): Promise<IUser[]> {
    return this.userService.getAll();
  }
}
