'use client';

import Link from 'next/link';
import useStore from '~/store';
import Leftbar from './leftbar';

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

const Navbar = ({ handleLogout }: { handleLogout: () => void }) => {
  return (
    <section className="sticky top-0 flex h-[80px] w-full items-center justify-between backdrop-blur-sm">
      <nav className="flex w-full items-center gap-3">
        <Link href="/homepage">Home</Link>
        <Link href="/search">Search</Link>
        <Link href="/tweet/create-tweet">Create Tweet</Link>
      </nav>
      <Button onClick={handleLogout}>Logout</Button>
    </section>
  );
};

const Rightbar = () => {
  return (
    <section className="hidden h-screen min-w-[300px] border sm:flex">
      <div>Search button</div>
    </section>
  );
};
