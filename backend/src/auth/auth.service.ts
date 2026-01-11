import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private prisma: PrismaService,
  ) { }

  async register(registerDto: RegisterDto) {
    const { email, password, firstName, lastName } = registerDto;

    // Check if user exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        // Default role is student, schoolId is optional for now
        role: 'STUDENT',
      },
    });

    // Generate token
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      schoolId: user.schoolId || null,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        schoolId: user.schoolId,
      },
    };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Find user
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate token
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      schoolId: user.schoolId || null,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        schoolId: user.schoolId,
      },
    };
  }

  async refreshToken(refreshToken: string) {
    // TODO: Implement refresh token logic using the refresh token strategy
    return { message: 'Refresh token logic pending implementation' };
  }

  async getProfile(user: any) {
    // User is attached to request by JwtStrategy
    const userProfile = await this.prisma.user.findUnique({
      where: { id: user.userId }, // JwtStrategy usually maps 'sub' to 'userId'
    });

    if (userProfile) {
      const { password, ...result } = userProfile;
      return result;
    }
    return null;
  }

  async forgotPassword(email: string) {
    // Mock implementation for development
    // In production, this should generate a token and send an email
    console.log(`[Mock] Password reset requested for ${email}`);
    return { message: 'If the email exists, a password reset link has been sent.' };
  }

  async resetPassword(resetDto: any) {
    // Mock implementation for development
    console.log(`[Mock] Password reset with token: ${resetDto.token}`);
    return { message: 'Password has been reset successfully.' };
  }

  async verifyOTP(otp: string) {
    // Mock implementation
    console.log(`[Mock] Verify OTP: ${otp}`);
    return { valid: true };
  }

  async changePassword(changePasswordDto: any) {
    // Mock implementation
    console.log(`[Mock] Change password for user`);
    return { message: 'Password changed successfully' };
  }
}

