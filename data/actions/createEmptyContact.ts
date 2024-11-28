'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { routes } from '@/validations/routeSchema';

export async function createEmptyContact() {
  const contact = await prisma.contact.create({
    data: {},
  });

  redirect(routes.contactIdEdit({ contactId: contact.id }));
}
