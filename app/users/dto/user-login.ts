import { IsEmail, IsNotEmpty, Max, Min } from 'class-validator';

export class UserLogin {
  @IsEmail()
  @IsNotEmpty()
  // @Max(255)
  readonly email: string;

  @IsNotEmpty()
  // @Min(8)
  // @Max(32)
  readonly password: string;
}
