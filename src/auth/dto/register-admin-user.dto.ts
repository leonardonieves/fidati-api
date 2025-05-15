import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterAdminUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
