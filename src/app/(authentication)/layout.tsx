export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto mt-6 flex w-1/2 items-center justify-center border p-8">
      {children}
    </section>
  );
}
