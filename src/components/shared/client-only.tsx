'use client';

export default function ClientOnly({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <section>{children}</section>;
}
