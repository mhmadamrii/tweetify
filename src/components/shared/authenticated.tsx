'use client';

import useStore from '~/store';
import Leftbar from './leftbar';
import Navbar from './navbar';
import Rightbar from './rightbar';
import CreateTweet from './create-tweet-modal';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { getUserAction } from '~/actions/user.action';
import { useQuery } from '@tanstack/react-query';
// import { useSearchParams } from 'next/navigation';

export default function Authenticated({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const store = useStore();
  const router = useRouter();
  const { isLoading, data } = useQuery({
    queryKey: ['userData'],
    queryFn: () => {
      return getUserAction({ id: 'lQu5Fe7HLIPhrEgrDHTkvcHY1Y8PaW' });
    },
  });

  console.log('data', data);

  const handleRedirectUncompleteUser = async () => {
    if (data?.username) store.setAuthUser(data);
    // const user = await apiGetAuthUser();
    // if (!user?.isCompleted) {
    //   router.push(
    //     `/homepage/onboarding?user-id=${user?.id}&username=${user?.username}`,
    //   );
    // }
  };

  // const searchParams = useSearchParams();
  // const isOpenPost = searchParams.get('create-post');

  if (isMounted) handleRedirectUncompleteUser();

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <>
      <ProgressBar
        height="4px"
        color="#050000"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <section className="flex">
        <Leftbar />
        <div className="w-full">
          <Navbar handleLogout={() => console.log('dude')} />
          {children}
        </div>
        <Rightbar />
      </section>
      {/* {!!isOpenPost && <CreateTweet />} */}
    </>
  );
}
