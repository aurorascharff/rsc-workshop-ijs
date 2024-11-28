import React from 'react';

import ClientComponent from './_components/ClientComponent';
import ServerComponent from './_components/ServerComponent';

export default function ClientServerPage() {
  return (
    <div>
      <ClientComponent content={<ServerComponent />}>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
