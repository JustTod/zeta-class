import { IUser } from '../domain/user.domain';

export const usersRepositoryToken: unique symbol = Symbol('UsersRepository');

export interface UsersRepository {
  create(user: IUser): Promise<IUser>;
  getByUserName(userName: string): Promise<IUser>;
}
