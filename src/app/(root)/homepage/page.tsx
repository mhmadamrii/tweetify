import TweetLists from '~/components/shared/tweet-lists';
import CreateTweet from '~/components/shared/create-tweet-modal';

import { Suspense } from 'react';

export default function Home({
  searchParams,
}: {
  searchParams: {
    'create-post': string;
  };
}) {
  const isShowCreatePost = searchParams?.['create-post'];
  return (
    <section>
      <Suspense fallback={<span>Loading contents....</span>}>
        <TweetLists />
      </Suspense>
      {isShowCreatePost && <CreateTweet />}
    </section>
  );
}
