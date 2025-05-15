import {
  IsEmail,
  IsOptional,
  IsString,
  IsEnum,
  IsDateString,
  ValidateIf,
  IsNotEmpty,
} from 'class-validator';

// export enum UserRole {
//   ADMIN = 'admin',
//   BASIC = 'basic',
//   PREMIUM = 'premium',
// }

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  auth0Id: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  phoneCode?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @IsOptional()
  @IsString()
  preferences?: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsString()
  role: string;
}
