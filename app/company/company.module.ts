import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyRepository } from './company.repository';
import { UsersModule } from 'app/user/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyRepository]), UsersModule],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
