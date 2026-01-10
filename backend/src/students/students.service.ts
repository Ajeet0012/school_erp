import {
  Injectable,
  NotFoundException,
  ConflictException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ListStudentsDto } from './dto/list-students.dto';
import { PaginatedResult } from '../common/utils/pagination.dto';
import * as bcrypt from 'bcrypt';
import { Role, Gender } from '@prisma/client';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create student linked to User
   * Only SCHOOL_ADMIN can create students
   */
  async create(
    createStudentDto: CreateStudentDto,
    currentUser: { userId: string; role: Role; schoolId?: string },
  ) {
    if (currentUser.role !== Role.SCHOOL_ADMIN) {
      throw new ForbiddenException('Only SCHOOL_ADMIN can create students');
    }

    if (!currentUser.schoolId) {
      throw new ForbiddenException('School admin must be associated with a school');
    }

    const {
      email,
      password,
      firstName,
      lastName,
      phone,
      rollNumber,
      gender,
      dob,
      classId,
      sectionId,
      parentId,
    } = createStudentDto;

    // Check if user with email already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Verify class exists and belongs to the school
    const classEntity = await this.prisma.class.findUnique({
      where: { id: classId },
    });

    if (!classEntity) {
      throw new NotFoundException(`Class with ID ${classId} not found`);
    }

    if (classEntity.schoolId !== currentUser.schoolId) {
      throw new ForbiddenException(
        'Access denied. You can only create students in classes from your school',
      );
    }

    // Verify section exists and belongs to the class
    const section = await this.prisma.section.findUnique({
      where: { id: sectionId },
    });

    if (!section) {
      throw new NotFoundException(`Section with ID ${sectionId} not found`);
    }

    if (section.classId !== classId) {
      throw new BadRequestException(
        'Section does not belong to the specified class',
      );
    }

    if (section.schoolId !== currentUser.schoolId) {
      throw new ForbiddenException(
        'Access denied. You can only create students in sections from your school',
      );
    }

    // Check for duplicate roll number in the same class
    const existingStudent = await this.prisma.student.findFirst({
      where: {
        rollNumber,
        classId,
      },
    });

    if (existingStudent) {
      throw new ConflictException(
        `Student with roll number "${rollNumber}" already exists in this class`,
      );
    }

    // Verify parent if provided
    if (parentId) {
      const parent = await this.prisma.parent.findUnique({
        where: { id: parentId },
      });

      if (!parent) {
        throw new NotFoundException(`Parent with ID ${parentId} not found`);
      }

      if (parent.schoolId !== currentUser.schoolId) {
        throw new ForbiddenException(
          'Parent must belong to the same school',
        );
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Use transaction to create user and student atomically
    return await this.prisma.$transaction(async (tx) => {
      // Create user
      const user = await tx.user.create({
        data: {
          email,
          password: hashedPassword,
          firstName,
          lastName,
          phone,
          role: Role.STUDENT,
          schoolId: currentUser.schoolId,
        },
      });

      // Create student
      const student = await tx.student.create({
        data: {
          userId: user.id,
          rollNumber,
          gender,
          dob: new Date(dob),
          schoolId: currentUser.schoolId,
          classId,
          sectionId,
        },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              firstName: true,
              lastName: true,
              phone: true,
              isActive: true,
            },
          },
          class: {
            select: {
              id: true,
              name: true,
            },
          },
          section: {
            select: {
              id: true,
              name: true,
            },
          },
          parents: {
            select: {
              id: true,
              user: {
                select: {
                  id: true,
                  firstName: true,
                  lastName: true,
                  email: true,
                },
              },
            },
          },
        },
      });

      // Link parent if provided
      if (parentId) {
        await tx.student.update({
          where: { id: student.id },
          data: {
            parents: {
              connect: { id: parentId },
            },
          },
        });

        // Fetch updated student with parent
        return await tx.student.findUnique({
          where: { id: student.id },
          include: {
            user: {
              select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                phone: true,
                isActive: true,
              },
            },
            class: {
              select: {
                id: true,
                name: true,
              },
            },
            section: {
              select: {
                id: true,
                name: true,
              },
            },
            parents: {
              select: {
                id: true,
                user: {
                  select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                  },
                },
              },
            },
          },
        });
      }

      return student;
    });
  }

  /**
   * List students
   * - SCHOOL_ADMIN can see all students in their school
   * - Can filter by classId and sectionId
   */
  async findAll(
    listStudentsDto: ListStudentsDto,
    currentUser: { userId: string; role: Role; schoolId?: string },
  ): Promise<PaginatedResult<any>> {
    if (currentUser.role !== Role.SCHOOL_ADMIN) {
      throw new ForbiddenException('Only SCHOOL_ADMIN can list students');
    }

    if (!currentUser.schoolId) {
      throw new ForbiddenException('School admin must be associated with a school');
    }

    const { page = 1, limit = 10, classId, sectionId } = listStudentsDto;
    const skip = (page - 1) * limit;

    const where: any = {
      schoolId: currentUser.schoolId,
    };

    if (classId) {
      // Verify class belongs to school
      const classEntity = await this.prisma.class.findUnique({
        where: { id: classId },
      });

      if (!classEntity) {
        throw new NotFoundException(`Class with ID ${classId} not found`);
      }

      if (classEntity.schoolId !== currentUser.schoolId) {
        throw new ForbiddenException(
          'Access denied. You can only access classes from your school',
        );
      }

      where.classId = classId;
    }

    if (sectionId) {
      // Verify section belongs to school
      const section = await this.prisma.section.findUnique({
        where: { id: sectionId },
      });

      if (!section) {
        throw new NotFoundException(`Section with ID ${sectionId} not found`);
      }

      if (section.schoolId !== currentUser.schoolId) {
        throw new ForbiddenException(
          'Access denied. You can only access sections from your school',
        );
      }

      where.sectionId = sectionId;
    }

    const [data, total] = await Promise.all([
      this.prisma.student.findMany({
        where,
        skip,
        take: limit,
        include: {
          user: {
            select: {
              id: true,
              email: true,
              firstName: true,
              lastName: true,
              phone: true,
              isActive: true,
            },
          },
          class: {
            select: {
              id: true,
              name: true,
            },
          },
          section: {
            select: {
              id: true,
              name: true,
            },
          },
          parents: {
            select: {
              id: true,
              user: {
                select: {
                  id: true,
                  firstName: true,
                  lastName: true,
                  email: true,
                },
              },
            },
          },
        },
        orderBy: { rollNumber: 'asc' },
      }),
      this.prisma.student.count({ where }),
    ]);

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * List students by class
   */
  async findByClass(
    classId: string,
    currentUser: { userId: string; role: Role; schoolId?: string },
  ) {
    if (currentUser.role !== Role.SCHOOL_ADMIN) {
      throw new ForbiddenException('Only SCHOOL_ADMIN can view students by class');
    }

    if (!currentUser.schoolId) {
      throw new ForbiddenException('School admin must be associated with a school');
    }

    // Verify class exists and belongs to the school
    const classEntity = await this.prisma.class.findUnique({
      where: { id: classId },
    });

    if (!classEntity) {
      throw new NotFoundException(`Class with ID ${classId} not found`);
    }

    if (classEntity.schoolId !== currentUser.schoolId) {
      throw new ForbiddenException(
        'Access denied. You can only access classes from your school',
      );
    }

    const students = await this.prisma.student.findMany({
      where: {
        classId,
        schoolId: currentUser.schoolId,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
            isActive: true,
          },
        },
        section: {
          select: {
            id: true,
            name: true,
          },
        },
        parents: {
          select: {
            id: true,
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
              },
            },
          },
        },
      },
      orderBy: { rollNumber: 'asc' },
    });

    return {
      class: {
        id: classEntity.id,
        name: classEntity.name,
      },
      students,
    };
  }

  /**
   * Get student by ID
   * - SCHOOL_ADMIN can view any student from their school
   * - STUDENT can only view their own profile
   */
  async findOne(
    id: string,
    currentUser: { userId: string; role: Role; schoolId?: string },
  ) {
    const student = await this.prisma.student.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
            isActive: true,
          },
        },
        class: {
          select: {
            id: true,
            name: true,
          },
        },
        section: {
          select: {
            id: true,
            name: true,
          },
        },
        parents: {
          select: {
            id: true,
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                phone: true,
              },
            },
          },
        },
        school: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },
      },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    // RBAC checks
    if (currentUser.role === Role.SCHOOL_ADMIN) {
      if (!currentUser.schoolId || student.schoolId !== currentUser.schoolId) {
        throw new ForbiddenException(
          'Access denied. You can only access students from your school',
        );
      }
    } else if (currentUser.role === Role.STUDENT) {
      // STUDENT can only view their own profile
      if (student.userId !== currentUser.userId) {
        throw new ForbiddenException(
          'Access denied. You can only view your own profile',
        );
      }
    } else {
      throw new ForbiddenException('Only SCHOOL_ADMIN and STUDENT can view student profiles');
    }

    return student;
  }

  /**
   * Update student
   * Only SCHOOL_ADMIN can update students
   */
  async update(
    id: string,
    updateStudentDto: UpdateStudentDto,
    currentUser: { userId: string; role: Role; schoolId?: string },
  ) {
    if (currentUser.role !== Role.SCHOOL_ADMIN) {
      throw new ForbiddenException('Only SCHOOL_ADMIN can update students');
    }

    if (!currentUser.schoolId) {
      throw new ForbiddenException('School admin must be associated with a school');
    }

    const student = await this.prisma.student.findUnique({
      where: { id },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    // Verify the student belongs to the school admin's school
    if (student.schoolId !== currentUser.schoolId) {
      throw new ForbiddenException(
        'Access denied. You can only update students from your school',
      );
    }

    // If class or section is being updated, validate them
    if (updateStudentDto.classId || updateStudentDto.sectionId) {
      const classId = updateStudentDto.classId || student.classId;
      const sectionId = updateStudentDto.sectionId || student.sectionId;

      // Verify class exists and belongs to school
      const classEntity = await this.prisma.class.findUnique({
        where: { id: classId },
      });

      if (!classEntity) {
        throw new NotFoundException(`Class with ID ${classId} not found`);
      }

      if (classEntity.schoolId !== currentUser.schoolId) {
        throw new ForbiddenException('Class must belong to the same school');
      }

      // Verify section exists and belongs to class
      if (updateStudentDto.sectionId) {
        const section = await this.prisma.section.findUnique({
          where: { id: sectionId },
        });

        if (!section) {
          throw new NotFoundException(`Section with ID ${sectionId} not found`);
        }

        if (section.classId !== classId) {
          throw new BadRequestException(
            'Section does not belong to the specified class',
          );
        }
      }
    }

    // Update student
    const updateData: any = {};

    if (updateStudentDto.gender) {
      updateData.gender = updateStudentDto.gender;
    }

    if (updateStudentDto.dob) {
      updateData.dob = new Date(updateStudentDto.dob);
    }

    if (updateStudentDto.classId) {
      updateData.classId = updateStudentDto.classId;
    }

    if (updateStudentDto.sectionId) {
      updateData.sectionId = updateStudentDto.sectionId;
    }

    // Update user info if provided
    if (updateStudentDto.firstName || updateStudentDto.lastName || updateStudentDto.phone) {
      await this.prisma.user.update({
        where: { id: student.userId },
        data: {
          ...(updateStudentDto.firstName && { firstName: updateStudentDto.firstName }),
          ...(updateStudentDto.lastName && { lastName: updateStudentDto.lastName }),
          ...(updateStudentDto.phone !== undefined && { phone: updateStudentDto.phone }),
        },
      });
    }

    const updatedStudent = await this.prisma.student.update({
      where: { id },
      data: updateData,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
            isActive: true,
          },
        },
        class: {
          select: {
            id: true,
            name: true,
          },
        },
        section: {
          select: {
            id: true,
            name: true,
          },
        },
        parents: {
          select: {
            id: true,
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
              },
            },
          },
        },
      },
    });

    return updatedStudent;
  }

  /**
   * Delete student
   * Only SCHOOL_ADMIN can delete students
   */
  async remove(
    id: string,
    currentUser: { userId: string; role: Role; schoolId?: string },
  ) {
    if (currentUser.role !== Role.SCHOOL_ADMIN) {
      throw new ForbiddenException('Only SCHOOL_ADMIN can delete students');
    }

    if (!currentUser.schoolId) {
      throw new ForbiddenException('School admin must be associated with a school');
    }

    const student = await this.prisma.student.findUnique({
      where: { id },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    // Verify the student belongs to the school admin's school
    if (student.schoolId !== currentUser.schoolId) {
      throw new ForbiddenException(
        'Access denied. You can only delete students from your school',
      );
    }

    // Use transaction to delete student and user
    return await this.prisma.$transaction(async (tx) => {
      // Delete student (this will cascade to related records if configured)
      await tx.student.delete({
        where: { id },
      });

      // Delete user
      await tx.user.delete({
        where: { id: student.userId },
      });

      return {
        message: `Student has been deleted successfully`,
      };
    });
  }
}
