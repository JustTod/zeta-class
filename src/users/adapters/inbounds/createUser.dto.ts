import { IUser } from '../../applications/domain/user.domain';

export interface CreateUserDto
  extends Omit<
    IUser,
    'hashedPassword' | 'setHashPassword' | 'comparePassword'
    > {
      password: string;
    }
