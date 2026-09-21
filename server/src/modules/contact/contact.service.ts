import { prisma } from '@/config/db.js';
import type { ContactInput } from '@shared/validators/contactSchema.js';

export const contactService = {
  async createMessage(data: ContactInput) {
    return prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        message: data.message,
      },
      select: { id: true },
    });
  },
};
