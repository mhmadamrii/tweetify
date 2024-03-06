import TweetLists from '~/components/shared/tweet-lists';

import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<span>Loading contents....</span>}>
        <TweetLists />
      </Suspense>
    </main>
  );
}
