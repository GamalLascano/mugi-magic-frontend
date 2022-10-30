import SearchBar from "../components/searchbar/SearchBar";
import Card from "../components/card/Card";
import { useState } from "react";
import ScryfallRequest from "../types/ScryfallRequest";
import Props from "../types/Props";

export default function Home() {
  const [cardData, setCardData] = useState<Props | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [noData, setNoData] = useState(true);
  const onSearch = async (el: string) => {
    setIsLoading(true);
    const response = await fetch(
      "https://api.scryfall.com/cards/named?fuzzy=" + el.replace(" ", "+")
    );
    const dataNew = await response.json().then((res: ScryfallRequest) => {
      return res;
    });
    setCardData({ data: dataNew });
    setIsLoading(false);
    setNoData(false);
  };
  return (
    <div className="App bg-gradient-to-br from-slate-200 to-slate-800 h-screen">
      <p className="text-3xl font-sans flex justify-center">Mugi magic site</p>
      <SearchBar search={onSearch} />
      {isLoading && <p>Loading...</p>}
      {!isLoading && !noData && <Card {...cardData}></Card>}
    </div>
  );
}
