import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SendMessageDto } from './dto/send-message.dto';
import { ListMessagesDto } from './dto/list-messages.dto';
import { PaginatedResult } from '../../common/utils/pagination.dto';
import { Role } from '@prisma/client';

@Injectable()
export class ChatService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Send message
   * SCHOOL_ADMIN/TEACHER can send messages
   * Basic message storage (ready for Message model integration)
   */
  async sendMessage(
    sendMessageDto: SendMessageDto,
    currentUser: { userId: string; role: Role; schoolId?: string },
  ) {
    if (
      currentUser.role !== Role.SCHOOL_ADMIN &&
      currentUser.role !== Role.TEACHER
    ) {
      throw new ForbiddenException(
        'Only SCHOOL_ADMIN and TEACHER can send messages',
      );
    }

    if (!currentUser.schoolId) {
      throw new ForbiddenException('User must be associated with a school');
    }

    const { receiverId, message, type } = sendMessageDto;

    // Verify receiver exists
    const receiver = await this.prisma.user.findUnique({
      where: { id: receiverId },
    });

    if (!receiver) {
      throw new NotFoundException(`Receiver with ID ${receiverId} not found`);
    }

    // Verify receiver belongs to same school (if they have a school)
    if (receiver.schoolId && receiver.schoolId !== currentUser.schoolId) {
      throw new ForbiddenException(
        'Access denied. You can only send messages to users in your school',
      );
    }

    // TODO: Once Message model is added to schema, use this structure:
    // const savedMessage = await this.prisma.message.create({
    //   data: {
    //     senderId: currentUser.userId,
    //     receiverId,
    //     message,
    //     type: type || 'text',
    //     schoolId: currentUser.schoolId,
    //   },
    //   include: {
    //     sender: {
    //       select: {
    //         id: true,
    //         firstName: true,
    //         lastName: true,
    //         email: true,
    //       },
    //     },
    //     receiver: {
    //       select: {
    //         id: true,
    //         firstName: true,
    //         lastName: true,
    //         email: true,
    //       },
    //     },
    //   },
    // });
    // return savedMessage;

    // For now, return the message structure ready for storage
    return {
      senderId: currentUser.userId,
      receiverId,
      message,
      type: type || 'text',
      schoolId: currentUser.schoolId,
      sender: {
        id: currentUser.userId,
        // Add sender details from current user if needed
      },
      receiver: {
        id: receiver.id,
        firstName: receiver.firstName,
        lastName: receiver.lastName,
        email: receiver.email,
      },
      createdAt: new Date(),
      note: 'Message model needs to be added to schema.prisma for persistent storage. Structure is ready for integration.',
    };
  }

  /**
   * List messages
   * Users can view messages they sent or received
   */
  async findAll(
    listMessagesDto: ListMessagesDto,
    currentUser: { userId: string; role: Role; schoolId?: string },
  ): Promise<PaginatedResult<any>> {
    const { page = 1, limit = 10, receiverId } = listMessagesDto;
    const skip = (page - 1) * limit;

    // TODO: Once Message model is added to schema, use this structure:
    // const where: any = {
    //   OR: [
    //     { senderId: currentUser.userId },
    //     { receiverId: currentUser.userId },
    //   ],
    //   schoolId: currentUser.schoolId,
    // };
    //
    // if (receiverId) {
    //   where.AND = [
    //     {
    //       OR: [
    //         {
    //           senderId: currentUser.userId,
    //           receiverId,
    //         },
    //         {
    //           senderId: receiverId,
    //           receiverId: currentUser.userId,
    //         },
    //       ],
    //     },
    //   ];
    // }
    //
    // const [data, total] = await Promise.all([
    //   this.prisma.message.findMany({
    //     where,
    //     skip,
    //     take: limit,
    //     include: {
    //       sender: {
    //         select: {
    //           id: true,
    //           firstName: true,
    //           lastName: true,
    //           email: true,
    //         },
    //       },
    //       receiver: {
    //         select: {
    //           id: true,
    //           firstName: true,
    //           lastName: true,
    //           email: true,
    //         },
    //       },
    //     },
    //     orderBy: { createdAt: 'desc' },
    //   }),
    //   this.prisma.message.count({ where }),
    // ]);
    //
    // return {
    //   data,
    //   meta: {
    //     page,
    //     limit,
    //     total,
    //     totalPages: Math.ceil(total / limit),
    //   },
    // };

    // For now, return empty structure
    return {
      data: [],
      meta: {
        page,
        limit,
        total: 0,
        totalPages: 0,
      },
      note: 'Message model needs to be added to schema.prisma for message listing. Structure is ready for integration.',
    };
  }

  /**
   * Get conversation between two users
   */
  async getConversation(
    otherUserId: string,
    currentUser: { userId: string; role: Role; schoolId?: string },
  ) {
    // Verify other user exists
    const otherUser = await this.prisma.user.findUnique({
      where: { id: otherUserId },
    });

    if (!otherUser) {
      throw new NotFoundException(`User with ID ${otherUserId} not found`);
    }

    // Verify other user belongs to same school (if they have a school)
    if (otherUser.schoolId && otherUser.schoolId !== currentUser.schoolId) {
      throw new ForbiddenException(
        'Access denied. You can only view conversations with users in your school',
      );
    }

    // TODO: Once Message model is added to schema, use this structure:
    // const messages = await this.prisma.message.findMany({
    //   where: {
    //     OR: [
    //       {
    //         senderId: currentUser.userId,
    //         receiverId: otherUserId,
    //       },
    //       {
    //         senderId: otherUserId,
    //         receiverId: currentUser.userId,
    //       },
    //     ],
    //     schoolId: currentUser.schoolId,
    //   },
    //   include: {
    //     sender: {
    //       select: {
    //         id: true,
    //         firstName: true,
    //         lastName: true,
    //         email: true,
    //       },
    //     },
    //     receiver: {
    //       select: {
    //         id: true,
    //         firstName: true,
    //         lastName: true,
    //         email: true,
    //       },
    //     },
    //   },
    //   orderBy: { createdAt: 'asc' },
    // });
    //
    // return {
    //   otherUser: {
    //     id: otherUser.id,
    //     firstName: otherUser.firstName,
    //     lastName: otherUser.lastName,
    //     email: otherUser.email,
    //   },
    //   messages,
    //   total: messages.length,
    // };

    // For now, return structure ready for integration
    return {
      otherUser: {
        id: otherUser.id,
        firstName: otherUser.firstName,
        lastName: otherUser.lastName,
        email: otherUser.email,
      },
      messages: [],
      total: 0,
      note: 'Message model needs to be added to schema.prisma for conversation viewing. Structure is ready for integration.',
    };
  }
}
