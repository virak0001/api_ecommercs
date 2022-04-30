import { Injectable } from '@nestjs/common';
import { UserEntity } from 'app/user/entities/user.entity';
import { UsersService } from 'app/user/users.service';
import { CompanyRepository } from './company.repository';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    public repo: CompanyRepository,
    private readonly userService: UsersService,
  ) {}

  async create(createCompanyDto: CreateCompanyDto, user: UserEntity) {
    const company = await this.repo.save(createCompanyDto);
    await this.userService.repo.update(
      { id: user.id },
      {
        ...user,
        employee_id: company.id,
      },
    );
    return company;
  }

  findAll() {
    return `This action returns all company`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
