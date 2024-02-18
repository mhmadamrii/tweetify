'use client';

import Link from 'next/link';
import useSession from '~/lib/useSession';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const user = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!user?.isCompleted) {
      router.push(
        `/homepage/onboarding?user-id=${user?.id}&username=${user?.username}`,
      );
    }
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
