import { Controller, Post, Body, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterMobileUserDto } from './dto/register-mobile-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { RegisterAdminUserDto } from './dto/register-admin-user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register/mobile')
    registerMobile(@Headers('authorization') authHeader: string,
        @Body() dto: RegisterMobileUserDto,) {
        return this.authService.registerMobileUser(dto);
    }

    @Post('register/admin')
    registerAdmin(@Body() dto: RegisterAdminUserDto) {
        return this.authService.registerAdminUser(dto);
    }
}
