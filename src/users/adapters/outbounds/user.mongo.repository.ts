import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Builder } from 'builder-pattern';

import { UsersRepository } from '../../applications/ports/user.repository';
import { usersCollectionName } from './user.schema';
import { UserEntity } from './user.entity';
import { IUser, User } from '../../applications/domain/user.domain';

@Injectable()
export class UserMongoRepository implements UsersRepository {
  constructor(
    @InjectModel(usersCollectionName)
    private readonly userModel: Model<UserEntity>,
  ) {}

  async create(user: IUser): Promise<IUser> {
    const newUser = new this.userModel(user);
    const userCreated = await newUser.save();
    return UserMongoRepository.toDomain(userCreated);
  }

  async getByUserName(userName: string): Promise<IUser> {
    const user = await this.userModel.findOne({ userName }).exec();
    return user ? UserMongoRepository.toDomain(user) : undefined;
  }

  static toDomain(user: UserEntity): IUser {
    return Builder(User)
      .id(user._id.toString())
      .userName(user.userName)
      .email(user.email)
      .hashedPassword(user.hashedPassword)
      .createdAt(user.createdAt)
      .updateAt(user.updateAt)
      .build();
  }
}
