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
    <section className="flex">
      <Leftbar />
      <div>
        <Navbar handleLogout={handleLogout} />
        {children}
      </div>
      <Rightbar />
    </section>
  );
}

const Navbar = ({ handleLogout }: { handleLogout: () => void }) => {
  return (
    <section className="sticky top-0 flex h-[80px] w-full justify-between backdrop-blur-sm">
      <nav className="flex w-full items-center gap-3">
        <Link href="/">Home</Link>
        <Link href="/search">Search</Link>
        <Link href="/tweet/create-tweet">Create Tweet</Link>
      </nav>
      <Button onClick={handleLogout}>Logout</Button>
    </section>
  );
};

const Leftbar = () => {
  return (
    <section className="sticky top-0 h-screen min-w-[100px] border pl-40 sm:min-w-[100px] md:min-w-[300px]">
      <p>Home</p>
      <p>Explore</p>
      <p>Notifications</p>
      <p>Etc</p>
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
