import {
  IsNotEmpty,
  IsString,
  IsArray,
  IsEmail,
  IsEnum,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { Role } from '@prisma/client';

export class SendEmailDto {
  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  body: string;

  @IsString()
  @IsOptional()
  htmlBody?: string;

  @IsEnum(Role, { each: true })
  @IsOptional()
  targetRoles?: Role[]; // Target by role

  @IsUUID()
  @IsOptional()
  classId?: string; // Target by class

  @IsArray()
  @IsEmail({}, { each: true })
  @IsOptional()
  emailAddresses?: string[]; // Direct email addresses (optional)
}
