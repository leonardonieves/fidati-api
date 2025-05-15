import { Injectable } from '@nestjs/common';
//import { Auth0Service } from './auth0.service';
import { RegisterMobileUserDto } from './dto/register-mobile-user.dto';
import { RegisterAdminUserDto } from './dto/register-admin-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    //private readonly auth0Service: Auth0Service,
    private readonly usersService: UsersService,
  ) { }

  async registerMobileUser(dto: RegisterMobileUserDto) {
    const email = dto.email;

    // const auth0User = await this.auth0Service.createAuth0User({
    //   email,
    //   password: 'DefaultPassword123!', // temporal
    // });

    return this.usersService.create({
      //auth0Id: auth0User.user_id,
      auth0Id: 'auth0|1234567890', // temporal
      email: dto.email,
      phoneCode: dto.phone.phoneCode,
      phoneNumber: dto.phone.phoneNumber,
      gender: dto.gender,
      birthDate: new Date(dto.birthDate).toString(),
      preferences: dto.preferences,
      bio: dto.bio,
      avatarUrl: dto.avatarUrl,
      location: dto.location,
      role: 'basic',
    });
  }

  async registerAdminUser(dto: RegisterAdminUserDto) {
    const email = dto.email;

    // const auth0User = await this.auth0Service.createAuth0User({
    //   email,
    //   password: 'AdminPassword123!', // puedes permitir que la cambien luego
    // });

    return this.usersService.create({
      //auth0Id: auth0User.user_id,
      auth0Id: 'auth0|0987654321', // temporal
      email: dto.email,
      name: dto.name,
      role: 'admin',
    });
  }
}
