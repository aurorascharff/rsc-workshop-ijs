import React from 'react';
import { prisma } from '@/db';

export default async function ServerComponent() {
  // We can access our database here because we are on the server
  const data = await prisma.contact.findMany();

  return (
    <div className="rounded border-2 border-blue-500 p-4">
      ServerComponent
      {data[0].first}
    </div>
  );
}
