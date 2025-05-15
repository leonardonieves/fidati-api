import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [AuthService, JwtStrategy, UsersService],
  imports: [UsersModule,PassportModule],
  controllers: [AuthController],
})
export class AuthModule { }
