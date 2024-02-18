export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto mt-10 flex w-full items-center justify-center p-8">
      {children}
    </section>
  );
}
