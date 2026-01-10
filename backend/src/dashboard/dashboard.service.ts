import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role, AttendanceStatus } from '@prisma/client';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get dashboard statistics for admin
   */
  async getAdminStats(currentUser: {
    userId: string;
    role: Role;
    schoolId?: string;
  }) {
    if (!currentUser.schoolId) {
      throw new ForbiddenException(
        'School admin must be associated with a school',
      );
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Get total students count
    const totalStudents = await this.prisma.student.count({
      where: {
        schoolId: currentUser.schoolId,
        user: {
          isActive: true,
        },
      },
    });

    // Get total teachers count
    const totalTeachers = await this.prisma.teacher.count({
      where: {
        schoolId: currentUser.schoolId,
        user: {
          isActive: true,
        },
      },
    });

    // Get active classes count
    const activeClasses = await this.prisma.class.count({
      where: {
        schoolId: currentUser.schoolId,
      },
    });

    // Get today's attendance statistics
    const todayAttendance = await this.prisma.attendance.findMany({
      where: {
        date: {
          gte: today,
          lt: tomorrow,
        },
        student: {
          schoolId: currentUser.schoolId,
        },
      },
    });

    const totalTodayAttendance = todayAttendance.length;
    const presentCount = todayAttendance.filter(
      (a) => a.status === AttendanceStatus.PRESENT,
    ).length;
    const attendancePercentage =
      totalTodayAttendance > 0
        ? Math.round((presentCount / totalTodayAttendance) * 100)
        : 0;

    // Get recent activities (last 10) - filter by users in the same school
    const recentActivities = await this.prisma.auditLog.findMany({
      where: {
        user: {
          schoolId: currentUser.schoolId,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 10,
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    return {
      statistics: {
        totalStudents,
        totalTeachers,
        activeClasses,
        todayAttendance: attendancePercentage,
      },
      recentActivities: recentActivities.map((activity) => ({
        id: activity.id,
        action: activity.action,
        user: activity.user
          ? `${activity.user.firstName} ${activity.user.lastName}`
          : 'System',
        createdAt: activity.createdAt,
      })),
    };
  }
}
