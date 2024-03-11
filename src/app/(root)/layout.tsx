'use client';

import Authenticated from '~/components/shared/authenticated';
import useSession from '~/lib/hooks/useSession';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Authenticated>{children}</Authenticated>;
}
