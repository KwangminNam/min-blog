'use client';

import { useEffect } from 'react';
import { Error } from '@kwangmins-blog/ui';
export default function ErrorPage({
  error,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <Error/>;
}