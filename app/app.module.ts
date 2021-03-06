import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';
import { CoreModule } from '@libs/core/modules';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [CoreModule, AuthModule, UsersModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
