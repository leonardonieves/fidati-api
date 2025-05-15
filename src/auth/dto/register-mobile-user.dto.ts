import {
    IsEmail,
    IsNotEmpty,
    IsString,
    IsEnum,
    IsDateString,
    ValidateNested,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  
  enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other',
  }
  
  class PhoneDto {
    @IsString()
    @IsNotEmpty()
    phoneCode: string;
  
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;
  }
  
  export class RegisterMobileUserDto {
    @ValidateNested()
    @Type(() => PhoneDto)
    phone: PhoneDto;
  
    @IsEmail()
    email: string;
  
    @IsEnum(Gender)
    gender: Gender;
  
    @IsDateString()
    birthDate: string;
  
    @IsString()
    preferences: string; // Puedes hacer un enum o array más adelante si lo necesitas
  
    @IsString()
    bio: string;
  
    @IsString()
    avatarUrl: string;
  
    @IsString()
    location: string;
  }
  