import { Types } from 'mongoose';
import { IUser } from '../../applications/domain/user.domain';

export interface UserEntity
  extends Omit<IUser, 'id' | 'setHashPassword' | 'comparePassword'> {
    _id?: Types.ObjectId;
  }
