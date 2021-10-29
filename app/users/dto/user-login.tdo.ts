import { IsEmail, IsNotEmpty, Max, Min } from 'class-validator';

export class UserLoginTdo {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
