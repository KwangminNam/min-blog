'use client';

import { useEffect } from 'react';
import { Error } from '@monorepo/ui';
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <Error/>;
}