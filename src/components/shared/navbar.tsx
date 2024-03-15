import Link from 'next/link';
import { Button } from '../ui/button';
import { LogoutButton } from './next-auth-button';

const navLinks = [
  {
    label: 'Home',
    link: '/homepage',
  },
  {
    label: 'Search',
    link: '/search',
  },
  {
    label: 'Create Tweet',
    link: '/tweet/create-tweet',
  },
];

export default function Navbar({
  handleLogout,
}: {
  handleLogout: () => void;
}) {
  return (
    <section className="sticky top-0 flex h-[80px] w-full items-center justify-between backdrop-blur-sm">
      <nav className="flex h-full w-full items-center">
        {navLinks.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="flex h-full items-center px-4 hover:backdrop-blur-lg"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <LogoutButton />
    </section>
  );
}
