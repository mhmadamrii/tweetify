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
    <main className="flex min-h-screen flex-col items-center justify-center border p-0 sm:p-24">
      <TwitterIcon />
      <div className="w-full bg-white">
        <section className="w-full py-8 md:py-16 xl:py-8">
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
              <div className="flex w-full flex-col gap-2 sm:w-1/2 sm:flex-row">
                <Link
                  className="w-full rounded-md border px-8 py-2 font-bold text-black"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className="w-full rounded-md bg-black px-8 py-2 font-bold text-white"
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
