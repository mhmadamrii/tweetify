import Link from 'next/link';
import TweetLists from '~/components/shared/tweet-lists';

import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/homepage/user?onboarding=true" className="block">
        Homepage intercepting route
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Soluta eaque atque officiis reiciendis ab alias mollitia
        exercitationem, libero aut ea id modi quaerat voluptates
        deserunt ipsam consequuntur asperiores. Cupiditate, error?
      </p>
      <Suspense fallback={<span>Loading contents....</span>}>
        <TweetLists />
      </Suspense>
    </div>
  );
}
