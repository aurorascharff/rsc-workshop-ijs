'use client';

import React from 'react';
import ErrorMessage from '@/components/ui/ErrorMessage';
import type Error from 'next/error';

type Props = {
  error: Error;
  reset: () => void;
};

export default function ErrorBoundary({ reset }: Props) {
  return <ErrorMessage onReset={reset}>⚠️ Something went wrong</ErrorMessage>;
}
