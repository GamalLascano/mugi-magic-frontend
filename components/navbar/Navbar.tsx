import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
const Navbar = ()=>{
    const searchBar = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const onSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        router.push('/card/' + searchBar.current!.value);
    };
    return <nav
    className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4"
   >
    <div
      className="grid grid-cols-4 container mx-auto flex flex-wrap items-center justify-between"
    >
      <div className="flex col-span-1 items-center">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> 
          <Link href="/">Mugi magic site</Link>
           </span>
      </div>
      <form className="relative col-span-3 flex md:order-1" onSubmit={onSubmit}>
        <input
          type="text"
          id="search-navbar"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
          placeholder="Search..."
          ref={searchBar}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
   </nav>
}
export default Navbar;