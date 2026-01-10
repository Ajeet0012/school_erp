import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding started');

  // SCHOOL
  const school = await prisma.school.upsert({
    where: { code: 'DEMO001' },
    update: {},
    create: {
      name: 'Demo School',
      code: 'DEMO001',
      address: 'Jaipur, Rajasthan',
      phone: '9999999999',
      email: 'demo@school.com',
    },
  });

  // PASSWORD
  const password = await bcrypt.hash('Password123!', 10);

  // USERS
  await prisma.user.createMany({
    data: [
      {
        firstName: 'Super',
        lastName: 'Admin',
        email: 'superadmin@erp.com',
        password,
        role: Role.SUPER_ADMIN,
      },
      {
        firstName: 'School',
        lastName: 'Admin',
        email: 'admin@school.com',
        password,
        role: Role.SCHOOL_ADMIN,
        schoolId: school.id,
      },
      {
        firstName: 'Aman',
        lastName: 'Verma',
        email: 'student@school.com',
        password,
        role: Role.STUDENT,
        schoolId: school.id,
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Seeding completed successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
