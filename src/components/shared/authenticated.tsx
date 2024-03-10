'use client';

import useStore from '~/store';
import Leftbar from './leftbar';
import Navbar from './navbar';
import Rightbar from './rightbar';
import useSession from '~/lib/hooks/useSession';

import { useRouter } from 'next/navigation';
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
    <section className="flex">
      <Leftbar />
      <div className="w-full">
        <Navbar handleLogout={handleLogout} />
        {children}
      </div>
      <Rightbar />
    </section>
  );
}
