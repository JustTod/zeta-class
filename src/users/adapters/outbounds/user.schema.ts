import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserEntity } from './user.entity';

export const usersCollectionName = 'users';

@Schema({
  collection: usersCollectionName,
  timestamps: true,
})
export class UserMongoSchema implements UserEntity {
  @Prop()
  userName: string;

  @Prop()
  email: string;

  @Prop()
  hashedPassword: string;

  @Prop()
  createdAt?: Date;

  @Prop()
  updateAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserMongoSchema);
UserSchema.index({ userNam: 1, email: 1 }, { unique: true });
