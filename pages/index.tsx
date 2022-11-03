import SearchBar from "../components/searchbar/SearchBar";
import Card from "../components/card/Card";
import { useState,useCallback, useEffect } from "react";
import ScryfallRequest from "../types/ScryfallRequest";
import Props from "../types/Props";
import SFManaRequest from "../types/SFManaRequest";
import Image from "next/image";
import MoonLoader from "react-spinners/MoonLoader";

export default function Home() {
  const [cardData, setCardData] = useState<Props | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [manaLoading,setManaLoading] = useState(true);
  const [noData, setNoData] = useState(true);
  const [manaSymbolArray, setManaSymbolArray] = useState<SFManaRequest|undefined>(undefined);
  const onSearch = async (el: string) => {
    setIsLoading(true);
    const response = await fetch(
      "https://api.scryfall.com/cards/named?fuzzy=" + el.replace(" ", "+")
    );
    const dataNew = await response.json().then((res: ScryfallRequest) => {
      res.mana_array=manaSymbolArray != undefined? manaSymbolArray:{data:[]} ;
      return res;
    });
    setCardData({ cardData: dataNew });
    setIsLoading(false);
    setNoData(false);
  };
  const loadMana = async ()=>{

      const data = await fetch("https://api.scryfall.com/symbology");
      const json = await data.json().then((res: SFManaRequest) => {
        return res;
      });
    setManaSymbolArray(json);
    setManaLoading(false);
  };
  useEffect(()=>{
    loadMana();
  },[]);

  return (
    <div className="App bg-gradient-to-br from-slate-200 to-slate-800 h-screen">
      <p className="text-3xl font-sans flex justify-center">Mugi magic site</p>
      <SearchBar search={onSearch} />
      {isLoading && <div className="flex h-screen justify-center items-center"> <MoonLoader color="#d4d4d4"/></div>}
      {!isLoading && !manaLoading && !noData && <Card {...cardData}></Card>}
    </div>
  );
}
