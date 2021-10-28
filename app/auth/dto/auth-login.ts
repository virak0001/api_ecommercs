import { IsEmail, IsNotEmpty, Max, Min } from 'class-validator';

export class AuthLogin {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
