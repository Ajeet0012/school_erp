import {
  IsNotEmpty,
  IsString,
  IsArray,
  IsEnum,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { Role } from '@prisma/client';

export class SendSmsDto {
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsEnum(Role, { each: true })
  @IsOptional()
  targetRoles?: Role[]; // Target by role

  @IsUUID()
  @IsOptional()
  classId?: string; // Target by class

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  phoneNumbers?: string[]; // Direct phone numbers (optional)
}
