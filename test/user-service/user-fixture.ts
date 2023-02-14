import { IUser, IUserService } from 'src/DOMAIN/interfaces';
import { IUserRepository } from 'src/DOMAIN/interfaces/repository/user-repository.interface';

export interface ITestsUserParams {
  userRepository: IUserRepository;
  sut: IUserService;
}

export const mockUserCreate: IUser = {
  address: 'address',
  age: 2,
  name: 'John',
  id: '1',
};
