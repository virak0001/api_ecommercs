import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriberService } from './subscriber.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UsersService, SubscriberService],
  exports: [UsersService],
  controllers: [UserController],
})
export class UsersModule {}
