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
    <section className="sticky top-0 flex h-screen w-[100px] flex-col items-end gap-2 border p-0 sm:w-[100px] sm:items-end sm:pl-[40px] md:min-w-[200px] md:items-start lg:w-[600px]">
      <div className="flex w-full justify-end px-5 sm:justify-end md:justify-normal">
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
      <div className="absolute bottom-4 flex flex-1 cursor-pointer rounded-full px-5 py-3 hover:bg-gray-200">
        <p>lorem ipsum</p>
      </div>
    </section>
  );
}
