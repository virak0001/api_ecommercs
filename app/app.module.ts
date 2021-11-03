import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';
import { CoreModule } from '@libs/core/modules';

@Module({
  imports: [CoreModule, CategoryModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
