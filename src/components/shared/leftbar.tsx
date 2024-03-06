import Link from 'next/link';

import { Home, Search, Bell, Mail } from 'lucide-react';

const navLists = [
  {
    label: 'Home',
    icon: <Home />,
    link: '/homepage',
  },
  {
    label: 'Search',
    icon: <Search />,
    link: '/search',
  },
  {
    label: 'Notification',
    icon: <Bell />,
    link: '/notifications',
  },
  {
    label: 'Message',
    icon: <Mail />,
    link: '/messages',
  },
];

export default function Leftbar() {
  return (
    <section className="sticky top-0 flex h-screen min-w-[100px] flex-col gap-6 border pl-[40px] sm:min-w-[100px] md:min-w-[300px]">
      {navLists.map((item, idx) => (
        <Link
          href={item.link}
          key={idx}
          className="flex h-11 items-center gap-2 rounded-lg border px-2 py-4 hover:bg-slate-50"
        >
          {item.icon} {item.label}
        </Link>
      ))}
    </section>
  );
}
