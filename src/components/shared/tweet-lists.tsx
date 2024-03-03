import { getTweetsAction } from '~/actions/tweet.action';

export default async function TweetLists() {
  const tweets =
    (await getTweetsAction({ userId: 'x0aiyAND' })) ?? [];
  return (
    <>
      <div>Tweet lists</div>
      <div>Tweet lists</div>
      {tweets?.map((item, idx) => (
        <div key={item?.id}>{item?.text}</div>
      ))}
    </>
  );
}
