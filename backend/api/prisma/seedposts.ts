import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { faker } from '@faker-js/faker';
import * as argon2 from 'argon2';

async function seed() {
  const numberOfPosts = 20;

  const users = await prisma.user.findMany()
  users.map(async (data) => {
    await prisma.post.create({
        data: {
            description: faker.internet.displayName() + faker.animal.bird() ,
            user: {
                connect: { id: data.id },
              },
        },
    })
  })
  
  console.log('seeded successfully');
  console.log(`generated posts`);
}
seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
