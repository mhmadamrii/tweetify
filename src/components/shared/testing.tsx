// import Link from 'next/link';

// export default function Component() {
//   return (
//     <div className="grid gap-4">
//       <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 md:gap-4 md:px-6 md:py-4">
//         <Link
//           className="flex items-center gap-2 text-2xl font-extrabold"
//           href="#"
//         >
//           <TwitterIcon className="h-8 w-8" />
//           <span className="sr-only">Twitter</span>
//         </Link>
//         <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
//           <Link
//             className="text-gray-900 hover:underline dark:text-gray-100"
//             href="#"
//           >
//             Home
//           </Link>
//           <Link
//             className="text-gray-900 hover:underline dark:text-gray-100"
//             href="#"
//           >
//             Explore
//           </Link>
//           <Link
//             className="text-gray-900 hover:underline dark:text-gray-100"
//             href="#"
//           >
//             Notifications
//           </Link>
//           <Link
//             className="text-gray-900 hover:underline dark:text-gray-100"
//             href="#"
//           >
//             Messages
//           </Link>
//         </nav>
//       </div>
//       <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
//         <div className="space-y-2">
//           <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
//             What's happening?
//           </h1>
//           <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//             Twitter is the best place to follow the things you love.
//             Tap into a world of stories with personalized content and
//             discover new friends and communities along the way.
//           </p>
//         </div>
//         <div className="flex flex-col gap-2 min-[400px]:flex-row">
//           <Link
//             className="inline-flex h-11 items-center justify-center gap-1 rounded-full border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
//             href="#"
//           >
//             Login
//           </Link>
//           <Link
//             className="inline-flex h-11 items-center justify-center rounded-full bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
//             href="#"
//           >
//             Register
//           </Link>
//         </div>
//       </div>
//       <div className="grid gap-4 px-4 py-2 md:gap-8 md:px-6 md:py-4">
//         <Link
//           className="flex items-center gap-2 text-base font-medium hover:underline"
//           href="#"
//         >
//           <HomeIcon className="h-5 w-5" />
//           Home
//         </Link>
//         <Link
//           className="flex items-center gap-2 text-base font-medium hover:underline"
//           href="#"
//         >
//           <ExpandIcon className="h-5 w-5" />
//           Explore
//         </Link>
//         <Link
//           className="flex items-center gap-2 text-base font-medium hover:underline"
//           href="#"
//         >
//           <SignalIcon className="h-5 w-5" />
//           Notifications
//         </Link>
//         <Link
//           className="flex items-center gap-2 text-base font-medium hover:underline"
//           href="#"
//         >
//           <MessagesSquareIcon className="h-5 w-5" />
//           Messages
//         </Link>
//       </div>
//     </div>
//   );
// }

// function ExpandIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
//       <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
//       <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
//       <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
//     </svg>
//   );
// }

// function HomeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   );
// }

// function MessagesSquareIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
//       <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
//     </svg>
//   );
// }

// function SignalIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 20h.01" />
//       <path d="M7 20v-4" />
//       <path d="M12 20v-8" />
//       <path d="M17 20V8" />
//       <path d="M22 4v16" />
//     </svg>
//   );
// }

// function TwitterIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//     </svg>
//   );
// }
