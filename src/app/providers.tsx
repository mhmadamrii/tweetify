'use client';

import React, { useRef, useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = {
  children?: React.ReactNode;
};

export const ApplicationProvider = ({ children }: Props) => {
  const queryClient = new QueryClient();
  const renders = useRef(0);
  console.log('component renders', renders.current++);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <SessionProvider>{children}</SessionProvider>
    </QueryClientProvider>
  );
};
