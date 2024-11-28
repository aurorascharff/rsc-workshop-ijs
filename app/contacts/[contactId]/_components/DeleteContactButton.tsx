'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { deleteContact } from '@/data/actions/deleteContact';

export default function DeleteContactButton({ contactId }: { contactId: string }) {
  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        const response = confirm('Are you sure you want to delete this contact?');
        if (!response) return;
        await deleteContact(contactId);
      }}
      action={deleteContact.bind(null, contactId)}
    >
      <Button type="submit" theme="destroy">
        Delete
      </Button>
    </form>
  );
}
