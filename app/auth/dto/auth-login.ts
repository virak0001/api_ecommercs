import { IsEmail, IsNotEmpty, Max, Min } from 'class-validator';

export class AuthLogin {
  @IsEmail()
  @IsNotEmpty()
  @Max(255)
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
