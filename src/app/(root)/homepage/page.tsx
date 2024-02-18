'use client';

import Link from 'next/link';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { apiGetAuthUser } from '~/actions/auth.action';

export default function Home() {
  const router = useRouter();

  const handleRedirectUncompleteUser = async () => {
    const user = await apiGetAuthUser();
    if (!user?.isCompleted) {
      router.push(
        `/homepage/onboarding?user-id=${user?.id}&username=${user?.username}`,
      );
    }
  };

  useEffect(() => {
    handleRedirectUncompleteUser();
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/homepage/user?onboarding=true" className="block">
        Homepage intercepting route
      </Link>
      <Link href="/onboarding">GOOOOOO onboard</Link>
    </div>
  );
}
