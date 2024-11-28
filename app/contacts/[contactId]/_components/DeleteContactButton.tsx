'use client';

import React, { useTransition } from 'react';

import SubmitButton from '@/components/ui/SubmitButton';
import { deleteContact } from '@/data/actions/deleteContact';

export default function DeleteContactButton({ contactId }: { contactId: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        const response = confirm('Are you sure you want to delete this contact?');
        if (!response) return;
        startTransition(async () => {
          await deleteContact(contactId);
        });
      }}
      action={deleteContact.bind(null, contactId)}
    >
      <SubmitButton loading={isPending} type="submit" theme="destroy">
        Delete
      </SubmitButton>
    </form>
  );
}
