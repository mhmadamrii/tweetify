import Authenticated from '~/components/shared/authenticated';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Authenticated>{children}</Authenticated>;
}
