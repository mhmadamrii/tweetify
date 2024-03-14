export const dynamic = 'force-dynamic';
export const revalidate = 0;
import Image from 'next/image';

import { getAllTweetsAction } from '~/actions/tweet.action';

export default async function TweetLists() {
  const tweets = (await getAllTweetsAction()) ?? [];
  console.log('tweets', tweets);
  return (
    <>
      {tweets?.map((item, idx) => (
        <div key={item?.id} className="min-h-60 border">
          <div className="flex">
            <span>By {item.user.name}</span>
            <h1 className="text-lg">{item?.text}</h1>
          </div>
          {item.imageUrl !== '' && (
            <Image
              src={item?.imageUrl!}
              width={200}
              height={100}
              alt="tweet image"
            />
          )}
        </div>
      ))}
    </>
  );
}
