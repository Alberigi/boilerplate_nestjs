import { it, expect, beforeEach } from 'vitest';
import { PrismaService } from 'src/APP.DATABASE/prisma.service';
import { UserRepository } from 'src/APP.REPOSITORY/user.repository';
import { IUserService } from 'src/DOMAIN/interfaces';

import { UserService } from 'src/APP.SERVICE/user.service';
import { mockUserCreate } from '../user-fixture';

describe('UserService', () => {
  const prismaService = {} as PrismaService;
  const userRepository = new UserRepository(prismaService);
  let sut: IUserService;

  describe('save', () => {
    beforeEach(() => {
      userRepository.save = () => Promise.resolve(mockUserCreate);
    });

    it('deveria contar os clientes, com nome e considerarEmail', async () => {
      sut = new UserService(userRepository);

      const result = await sut.save(mockUserCreate);

      expect(result).to.not.null;
      expect(result).toEqual(mockUserCreate);
    });
  });
});
