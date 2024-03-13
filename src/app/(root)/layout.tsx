import Authenticated from '~/components/shared/authenticated';
import { Suspense } from 'react';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<h1>Loading the Stream....</h1>}>
      <Authenticated>{children}</Authenticated>;
    </Suspense>
  );
}
