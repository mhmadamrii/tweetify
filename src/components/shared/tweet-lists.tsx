import Image from 'next/image';

import {
  getTweetsAction,
  getAllTweetsAction,
} from '~/actions/tweet.action';

export default async function TweetLists() {
  const tweets = (await getAllTweetsAction()) ?? [];
  return (
    <>
      {tweets?.map((item, idx) => (
        <div key={item?.id} className="min-h-60 border">
          <h1 className="text-lg">{item?.text}</h1>
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
