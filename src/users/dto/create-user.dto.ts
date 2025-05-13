import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Juan Pérez' })
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'juan@gmail.com' })
  email: string;

  @IsOptional()
  @IsNumber()
  age?: number;
}
