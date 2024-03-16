'use client';

import { useSession } from 'next-auth/react';

export const SessionClient = () => {
  const { data: session } = useSession();
  return (
    <div>
      <p>Sesion client</p>
    </div>
  );
};
