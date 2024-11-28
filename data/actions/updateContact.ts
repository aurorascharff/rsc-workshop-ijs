'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { routes } from '@/validations/routeSchema';

export async function updateContact(contactId: string, formData: FormData) {
  const data = Object.fromEntries(formData);

  await prisma.contact.update({
    data,
    where: {
      id: contactId,
    },
  });

  redirect(routes.contactId({ contactId }));
}
