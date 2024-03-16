import TweetLists from '~/components/shared/tweet-lists';

import { Suspense } from 'react';
import { SessionClient } from './_components/session-client';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '~/lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <section>
      <Suspense fallback={<span>Loading contents....</span>}>
        <TweetLists />
      </Suspense>
      <SessionClient />
    </section>
  );
}
