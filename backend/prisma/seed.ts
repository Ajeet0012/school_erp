import { PrismaClient, Role, Gender, AttendanceStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

const SCHOOL_DATA = {
  name: 'Delhi Public School, RK Puram',
  code: 'DPS-RKP',
  address: 'Sector 12, RK Puram, New Delhi',
  phone: '+91-11-49115500',
  email: 'info@dpsrkp.net',
};

const CLASS_NAMES = [
  'Nursery',
  'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6',
  'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'
];

async function main() {
  console.log('🌱 Starting seed...');

  console.log('🧹 Cleaning database...');
  await prisma.systemLog.deleteMany(); // Added
  await prisma.attendance.deleteMany();
  await prisma.examResult.deleteMany();
  await prisma.exam.deleteMany();
  await prisma.homework.deleteMany();
  await prisma.timetable.deleteMany();
  await prisma.fee.deleteMany();
  await prisma.notice.deleteMany();
  await prisma.book.deleteMany();
  await prisma.vehicle.deleteMany();
  await prisma.student.deleteMany();
  await prisma.teacher.deleteMany();
  await prisma.parent.deleteMany();
  await prisma.auditLog.deleteMany();
  await prisma.user.deleteMany();
  await prisma.section.deleteMany();
  await prisma.class.deleteMany();
  await prisma.subject.deleteMany();
  await prisma.school.deleteMany();

  console.log('🏫 Creating School...');
  const school = await prisma.school.create({ data: SCHOOL_DATA });
  const commonPassword = await bcrypt.hash('Admin@123', SALT_ROUNDS);

  console.log('👨‍💼 Creating School Admin...');
  await prisma.user.create({
    data: {
      email: 'admin@dps.com',
      password: commonPassword,
      role: Role.SCHOOL_ADMIN,
      firstName: 'Principal',
      lastName: 'Sharma',
      phone: '9876543210',
      schoolId: school.id,
    },
  });

  console.log('👩‍🏫 Creating Teachers...');
  const teacherHash = await bcrypt.hash('Teacher@123', SALT_ROUNDS);
  for (let i = 0; i < CLASS_NAMES.length; i++) {
    const className = CLASS_NAMES[i];
    const user = await prisma.user.create({
      data: {
        email: `teacher${i + 1}@dps.com`,
        password: teacherHash,
        role: Role.TEACHER,
        firstName: `Teacher`,
        lastName: `${className}`,
        schoolId: school.id,
      },
    });
    await prisma.teacher.create({
      data: {
        userId: user.id,
        schoolId: school.id,
        qualification: 'B.Ed, M.Sc',
        experience: 5 + i,
      }
    });
  }

  console.log('🏫 Creating Classes, Subjects, Exams and Students...');
  const studentHash = await bcrypt.hash('Student@123', SALT_ROUNDS);
  const parentHash = await bcrypt.hash('Parent@123', SALT_ROUNDS);

  for (const className of CLASS_NAMES) {
    const classRecord = await prisma.class.create({
      data: { name: className, schoolId: school.id },
    });

    const sectionRecord = await prisma.section.create({
      data: { name: 'A', classId: classRecord.id, schoolId: school.id },
    });

    // Subjects
    const subjects = ['Mathematics', 'Science', 'English', 'History', 'Geography'];
    const subjectRecords = [];
    for (const subName of subjects) {
      const sub = await prisma.subject.create({
        data: {
          name: subName,
          code: `${subName.substring(0, 3).toUpperCase()}-${className.replace(/\s+/g, '')}`,
          schoolId: school.id,
        }
      });
      subjectRecords.push(sub);
    }

    // Exams
    for (let k = 0; k < 2; k++) {
      await prisma.exam.create({
        data: {
          name: k === 0 ? 'Unit Test 1' : 'Mid Term-Exam',
          type: k === 0 ? 'UNIT_TEST' : 'MID_TERM',
          date: new Date(Date.now() + (k + 1) * 7 * 24 * 60 * 60 * 1000),
          classId: classRecord.id,
        }
      });
    }

    // Students & Parents
    for (let j = 1; j <= 5; j++) { // Reduced to 5 per class for speed
      const studentEmail = `student_${className.replace(/\s+/g, '').toLowerCase()}_${j}@dps.com`;
      const studentUser = await prisma.user.create({
        data: {
          email: studentEmail,
          password: studentHash,
          role: Role.STUDENT,
          firstName: `Student`,
          lastName: `${className} ${j}`,
          schoolId: school.id,
        },
      });

      const studentProfile = await prisma.student.create({
        data: {
          userId: studentUser.id,
          rollNumber: `R-${className.substring(0, 3).toUpperCase()}-${j}`,
          gender: j % 2 === 0 ? Gender.FEMALE : Gender.MALE,
          dob: new Date(2010, 0, 1),
          schoolId: school.id,
          classId: classRecord.id,
          sectionId: sectionRecord.id,
        },
      });

      const parentUser = await prisma.user.create({
        data: {
          email: `parent_${studentUser.id.substring(0, 4)}@dps.com`,
          password: parentHash,
          role: Role.PARENT,
          firstName: `Parent`,
          lastName: `of ${studentUser.firstName}`,
          schoolId: school.id,
        },
      });

      await prisma.parent.create({
        data: {
          userId: parentUser.id,
          schoolId: school.id,
          students: { connect: { id: studentProfile.id } }
        },
      });

      // Simple Fee entry
      await prisma.fee.create({
        data: {
          amount: 5000 + (j * 100),
          status: 'PENDING',
          dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
          studentId: studentProfile.id,
        }
      });
    }

    // Homework
    const teachers = await prisma.teacher.findMany({ where: { schoolId: school.id } });
    const teacher = teachers[(CLASS_NAMES.indexOf(className)) % teachers.length];
    for (let h = 0; h < 2; h++) {
      await prisma.homework.create({
        data: {
          title: h === 0 ? 'Chapter 1 Exercise' : 'Project Research',
          description: 'Complete all questions in section A',
          classId: classRecord.id,
          subjectId: subjectRecords[h % subjectRecords.length].id,
          teacherId: teacher.id,
          dueDate: new Date(Date.now() + (h + 1) * 3 * 24 * 60 * 60 * 1000),
        }
      });
      
    }
  }

  // System Logs for Super Admin
  console.log('📜 Creating System Logs...');
  await prisma.systemLog.createMany({
    data: [
      { level: 'INFO', message: 'System startup successful' },
      { level: 'WARNING', message: 'High memory usage detected in node clusters' },
      { level: 'ERROR', message: 'Failed to synchronize classroom deployment nodes' },
      { level: 'INFO', message: 'Database backup completed' },
    ]
  });

  console.log('✅ Seed completed successfully!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
