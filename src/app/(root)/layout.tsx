'use client';

import Authenticated from '~/components/shared/authenticated';
import CreateTweet from '~/components/shared/create-tweet-modal';
import { useSearchParams } from 'next/navigation';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const isOpenPost = searchParams.get('create-post');
  console.log(!!isOpenPost);
  return (
    <Authenticated>
      {children}
      {!!isOpenPost && <CreateTweet />}
    </Authenticated>
  );
}
