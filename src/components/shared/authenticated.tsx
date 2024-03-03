'use client';

import Link from 'next/link';
import useSession from '~/lib/hooks/useSession';
import useStore from '~/store';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { apiLogoutUser, apiGetAuthUser } from '~/actions/auth.action';
import { useEffect, useState } from 'react';

export default function Authenticated({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const store = useStore();
  const router = useRouter();
  const user = useSession();

  const handleLogout = async () => {
    store.setRequestLoading(true);
    try {
      await apiLogoutUser();
    } catch (error) {
      console.log(error);
    } finally {
      store.reset();
      router.push('/login');
    }
  };

  const handleRedirectUncompleteUser = async () => {
    const user = await apiGetAuthUser();
    if (!user?.isCompleted) {
      router.push(
        `/homepage/onboarding?user-id=${user?.id}&username=${user?.username}`,
      );
    }
  };

  if (isMounted) handleRedirectUncompleteUser();

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <section>
      <div className="flex">
        <nav>
          <Link href="/">Home</Link>
          <Link href="/search">Search</Link>
          <Link href="/tweet/create-tweet">Create Tweet</Link>
        </nav>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      {children}
    </section>
  );
}
