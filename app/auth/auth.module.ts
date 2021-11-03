import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './locale/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersModule } from '../user/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './strategies/constants';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION_TIME || '15d' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, PassportModule, JwtModule],
  controllers: [AuthController],
})
export class AuthModule {}
