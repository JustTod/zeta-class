import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { jwtExpiresIn, jwtSecret } from '../config/jwt.config';
import { UserSchema, usersCollectionName } from '../users/adapters/outbounds/user.schema';
import { AuthController } from './adapters/inbounds/auth.controller';
import { JwtStrategy } from './jwtStrategy';
import { LoginUseCase } from './usecases/login.usecase';
import { usersRepositoryToken } from '../users/applications/ports/user.repository';
import { UserMongoRepository } from '../users/adapters/outbounds/user.mongo.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: usersCollectionName, schema: UserSchema }
    ]),
    PassportModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: jwtExpiresIn }
    }),
  ],
  controllers: [AuthController],
  providers: [
    JwtStrategy,
    LoginUseCase,
    {
      provide: usersRepositoryToken.toString(),
      useClass: UserMongoRepository,
    },
  ],
  exports: [LoginUseCase],
})
export class AuthModule {}
