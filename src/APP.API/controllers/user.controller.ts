import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArgsUpdateDTO } from 'src/DOMAIN/dtos';
import { IUserController } from 'src/DOMAIN/interfaces/controller/user-controller.interface';
import { IUserService, IUser } from '../../DOMAIN/interfaces';

@Controller('user')
export class UserController implements IUserController {
  constructor(private readonly userService: IUserService) {}

  @Get('getAll')
  getAll(): Promise<IUser[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  getOne(@Param() indentificator: string): Promise<IUser> {
    return this.userService.getOne(indentificator);
  }

  @Post('save')
  async save(@Body() data: Partial<IUser>): Promise<IUser> {
    return this.userService.save(data);
  }

  @Put(':id')
  async update(
    @Body() { indentificator, data }: ArgsUpdateDTO<IUser>,
  ): Promise<IUser> {
    return this.userService.update(indentificator, data);
  }

  @Delete(':id')
  async delete(@Param() indentificator: string): Promise<IUser> {
    return this.userService.delete(indentificator);
  }
}
