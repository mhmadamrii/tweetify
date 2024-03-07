import Link from 'next/link';
import { Button } from '../ui/button';

export default function Navbar({
  handleLogout,
}: {
  handleLogout: () => void;
}) {
  return (
    <section className="sticky top-0 flex h-[80px] w-full items-center justify-between backdrop-blur-sm">
      <nav className="flex w-full items-center gap-3">
        <Link href="/homepage">Home</Link>
        <Link href="/search">Search</Link>
        <Link href="/tweet/create-tweet">Create Tweet</Link>
      </nav>
      <Button onClick={handleLogout}>Logout</Button>
    </section>
  );
}
