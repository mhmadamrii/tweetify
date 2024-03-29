'use client';

import Link from 'next/link';

import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  return (
    <section className="sticky top-0 flex h-screen w-[100px] flex-col items-end gap-2 border p-0 sm:w-[100px] sm:items-end sm:pl-[100px] md:w-[200px] md:items-start md:p-0 md:pl-7 lg:w-[500px] lg:pl-[130px]">
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
        <div onClick={() => router.push('?create-post=true')}>
          Post
        </div>
      </div>
    </section>
  );
}
