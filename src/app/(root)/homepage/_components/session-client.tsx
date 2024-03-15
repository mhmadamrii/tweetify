'use client';

import { useSession } from 'next-auth/react';

export const SessionClient = () => {
  const { data: session } = useSession();
  console.log('data session', session);
  return (
    <div>
      <p>Sesion client</p>
    </div>
  );
};
