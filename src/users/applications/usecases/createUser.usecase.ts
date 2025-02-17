import { Injectable, Inject } from '@nestjs/common';
import { Builder } from 'builder-pattern';

import { UsersRepository, usersRepositoryToken } from '../ports/user.repository';
import { CreateUserCommand } from './createUser.command';
import { IUser, User } from '../domain/user.domain';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(usersRepositoryToken.toString())
    private readonly usersRepository: UsersRepository,
  ) {}

  async execute(command: CreateUserCommand): Promise<IUser> {
    const user = Builder(User)
      .userName(command.userName)
      .email(command.email)
      .build();
    await user.setHashPassword(command.password);
    return await this.usersRepository.create(user);
      
  }
}
