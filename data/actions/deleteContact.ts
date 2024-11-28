'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { routes } from '@/validations/routeSchema';

export async function deleteContact(contactId: string) {
  await prisma.contact.delete({
    where: {
      id: contactId,
    },
  });

  redirect(routes.home());
}
