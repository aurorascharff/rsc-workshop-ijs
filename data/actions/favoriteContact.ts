'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';
import { routes } from '@/validations/routeSchema';

export async function favoriteContact(contactId: string, favorite: boolean) {
  await slow();

  await prisma.contact.update({
    data: {
      favorite: !favorite,
    },
    where: {
      id: contactId,
    },
  });

  revalidatePath(routes.home());
}
