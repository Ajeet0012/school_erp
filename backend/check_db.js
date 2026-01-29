
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    try {
        const schools = await prisma.school.count();
        const users = await prisma.user.count();
        const students = await prisma.student.count();
        const teachers = await prisma.teacher.count();
        const classes = await prisma.class.count();

        console.log('--- DB COUNTS ---');
        console.log(`Schools: ${schools}`);
        console.log(`Users: ${users}`);
        console.log(`Students: ${students}`);
        console.log(`Teachers: ${teachers}`);
        console.log(`Classes: ${classes}`);
        console.log('-----------------');

        if (users > 0) {
            const firstUser = await prisma.user.findFirst();
            console.log('First User:', JSON.stringify(firstUser, null, 2));
        }

    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
