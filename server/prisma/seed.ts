import { PrismaClient } from '../src/generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcrypt';

const databaseUrl = process.env['DATABASE_URL'];

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined');
}

const adapter = new PrismaPg({
  connectionString: databaseUrl,
});

const prisma = new PrismaClient({ adapter });

const main = async () => {
  const adminEmail = process.env.SEED_ADMIN_EMAIL;
  const adminPassword = process.env.SEED_ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error('SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD are required');
  }

  // 1. Create roles
  await prisma.role.createMany({
    data: [{ name: 'ADMIN' }, { name: 'CUSTOMER' }],
    skipDuplicates: true,
  });

  // 2. Create permissions
  await prisma.permission.createMany({
    data: [
      { name: 'products:read' },
      { name: 'products:create' },
      { name: 'products:update' },
      { name: 'products:delete' },

      { name: 'categories:read' },
      { name: 'categories:create' },
      { name: 'categories:update' },
      { name: 'categories:delete' },

      { name: 'orders:read' },
      { name: 'orders:update' },

      { name: 'inventory:read' },
      { name: 'inventory:update' },

      { name: 'users:read' },
      { name: 'users:update' },
      { name: 'users:delete' },

      { name: 'reviews:read' },
      { name: 'reviews:approve' },

      { name: 'contact-messages:read' },
      { name: 'contact-messages:update' },
    ],
    skipDuplicates: true,
  });

  // 3. Get roles
  const adminRole = await prisma.role.findUnique({
    where: { name: 'ADMIN' },
    select: { id: true },
  });

  const customerRole = await prisma.role.findUnique({
    where: { name: 'CUSTOMER' },
    select: { id: true },
  });

  // 4. Get permissions
  const permissions = await prisma.permission.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  // 5. Give ADMIN all permissions
  await prisma.rolePermission.createMany({
    data: permissions.map((permission) => ({
      roleId: adminRole!.id,
      permissionId: permission.id,
    })),
    skipDuplicates: true,
  });

  // 6. Give CUSTOMER only the permissions they need
  const customerPermissions = permissions.filter(
    (permission) => permission.name === 'products:read',
  );

  await prisma.rolePermission.createMany({
    data: customerPermissions.map((permission) => ({
      roleId: customerRole!.id,
      permissionId: permission.id,
    })),
    skipDuplicates: true,
  });

  // 7. Create a test auth user
  if (process.env.NODE_ENV !== 'production') {
    // create development admin

    const hashedPassword = await bcrypt.hash(adminPassword, 12);

    await prisma.user.upsert({
      where: { email: adminEmail },
      update: {}, // no update, just ensure it exists
      create: {
        email: adminEmail,
        name: "Gamal Test's Admin",
        password: hashedPassword,
        role: {
          connect: { name: 'ADMIN' }, // link to ADMIN role
        },
      },
    });
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
