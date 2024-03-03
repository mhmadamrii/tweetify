export default function CreateTweetLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex h-screen items-center justify-center">
      {children}
    </main>
  );
}
