import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { NoticeAudience } from '@prisma/client';

export class CreateNoticeDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsEnum(NoticeAudience)
  @IsNotEmpty()
  audience: NoticeAudience;

  @IsUUID()
  @IsOptional()
  classId?: string; // Optional: target specific class
}
