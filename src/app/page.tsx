import Link from 'next/link';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (token) {
    redirect('/homepage');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center  p-24">
      <TwitterIcon />
      <div className="w-full bg-white">
        <section className="w-full border py-8 md:py-16 xl:py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Join the conversation
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed xl:text-2xl/relaxed">
                  The open platform for everyone to express their
                  thoughts, follow their interests, and engage in
                  meaningful conversations.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/register"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
