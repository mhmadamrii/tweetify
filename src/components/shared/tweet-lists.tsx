import { getTweetsAction } from '~/actions/tweet.action';

export default async function TweetLists() {
  const tweets =
    (await getTweetsAction({ userId: 'x0aiyAND' })) ?? [];
  return (
    <>
      {tweets?.map((item, idx) => (
        <div key={item?.id} className="min-h-60 border">
          <h1 className="text-lg">{item?.text}</h1>
        </div>
      ))}
    </>
  );
}
