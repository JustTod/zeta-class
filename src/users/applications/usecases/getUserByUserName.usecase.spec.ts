import { faker } from '@faker-js/faker'
import { mock } from 'jest-mock-extended';

import { IUser } from '../domain/user.domain';
import { UsersRepository } from '../ports/user.repository';
import { GetUserByUserNameUseCase } from './getUserByUserName.usecase';
import { GetUserByUserNameQuery } from './getUserByUserName.query';

describe('Get User by User Name Use Case', () => {
  it('should be get user when user exist', async () => {
    // Arrange
    const userName = faker.internet.userName();
    const user = mock<IUser>({
      userName,
    });

    const usersRepository = mock<UsersRepository>();
    usersRepository.getByUserName.mockResolvedValue(user);

    const getUserByUserNameUseCase = new GetUserByUserNameUseCase(
      usersRepository,
    );

    const query: GetUserByUserNameQuery = {
      userName,
    };

    const expected = user;

    // Act
    const actual = await getUserByUserNameUseCase.execute(query);

    // Assert
    expect(actual).toEqual(expected);
    expect(usersRepository.getByUserName).toHaveBeenCalledWith(userName);
  });
});
