import { IsEmail, IsNotEmpty, Max, Min } from 'class-validator';

export class UserLogin {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
