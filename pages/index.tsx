import SearchBar from "../components/searchbar/SearchBar";
import Card from "../components/card/Card";
import { useState,useCallback, useEffect } from "react";
import ScryfallRequest from "../types/ScryfallRequest";
import Props from "../types/Props";
import SFManaRequest from "../types/SFManaRequest";
import Image from "next/image";
import SearchList from "../components/searchbar/SearchList";
import MoonLoader from "react-spinners/MoonLoader";

export default function Home() {
  return (
    <div className="App bg-gradient-to-br from-slate-200 to-slate-800 min-h-screen">
      <p className="text-3xl font-sans flex justify-center">Mugi magic site</p>
      <SearchBar/>
    </div>
  );
}
