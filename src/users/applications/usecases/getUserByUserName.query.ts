import { IUser } from '../domain/user.domain';

export type GetUserByUserNameQuery = Pick<IUser, 'userName'>;
