import React from 'react';
import { prisma } from '@/db';

export default async function ServerComponent() {
  const data = await prisma.contact.findMany();

  return (
    <div className="rounded border-2 border-blue-500 p-4">
      ServerComponent
      {data[0].first}
      <button
        onClick={() => {
          return console.log('clicked');
        }}
      >
        Click me
      </button>
    </div>
  );
}
