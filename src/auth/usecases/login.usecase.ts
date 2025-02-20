import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { usersRepositoryToken, UsersRepository } from '../../users/applications/ports/user.repository';
import { JwtService } from '@nestjs/jwt';
import { LoginCommand } from './login.command';


@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(usersRepositoryToken.toString())
    private readonly userRepository: UsersRepository,
    private readonly jwtService: JwtService
  ) {}

  async execute(command: LoginCommand): Promise<string> {
    const user = await this.userRepository.getByUserName(command.username);
    const isPasswordCorrect = user.comparePassword(command.password);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Invalid username or password');
    }
    return this.jwtService.sign({ sub: user.id, username: user.userName });
  }
}
