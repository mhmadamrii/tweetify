import Link from 'next/link';

import { Home, Twitter, Search, Bell, Mail } from 'lucide-react';

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
    <section className="sticky top-0 flex h-screen min-w-[100px] flex-col items-end gap-2 border p-0 sm:min-w-[100px] sm:items-start sm:pl-[40px] md:min-w-[200px] lg:min-w-[300px]">
      <div className="flex w-full justify-end px-5 sm:justify-normal">
        <Twitter />
      </div>
      {navLists.map((item, idx) => (
        <Link href={item.link} key={idx}>
          <div className="inline-block w-auto rounded-full px-5 py-3 hover:bg-gray-200">
            <div className="flex gap-2">
              {item.icon}
              <div className="hidden sm:hidden md:block">
                {item.label}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
