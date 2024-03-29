import React, { useRef,Fragment, useState } from "react";
import SFListRequest from "../../types/SFListRequest";
import SearchList from "./SearchList";
import { useRouter } from "next/router";


const SearchBar = () => {
  const searchBar = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [searchArray,setSearchArray] = useState<string[]>([]);
  const onSearchList = async(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const response = await fetch("https://api.scryfall.com/cards/search?" + new URLSearchParams({q:searchBar.current!.value}));
    if(!response.ok){
      setSearchArray([]);
      return;
    }
    const json = await response.json().then((res:SFListRequest)=>{
      return res;
    })
    setSearchArray(prevstate=>json.data.map(el=>el.name));
    return;
  };
  const emptyArray =()=>{
    setSearchArray([]);
  }
  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/card/' + searchBar.current!.value);
  };
  return (
    <Fragment>
    <form className="flex justify-center" onSubmit={searchHandler} onChange={onSearchList}>
      <div className="relative w-96 flex">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          name="card"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Cards"
          ref={searchBar}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
    {!(searchArray.length==0) && <SearchList elements={searchArray}setArray={emptyArray}/>} 
    </Fragment>
  );
};
export default SearchBar;
