import { useRouter } from "next/router";
import React, { useState, useEffect, useCallback } from "react";
import Card from "../../components/card/Card";
import Props from "../../types/Props";
import SFManaRequest from "../../types/SFManaRequest";
import ScryfallRequest from "../../types/ScryfallRequest";
import MoonLoader from "react-spinners/MoonLoader";
import Navbar from "../../components/navbar/Navbar";
import NavbarWithList from "../../components/navbar/NavbarWithList";

const RenderCard = () => {
  const router = useRouter();
  const [cardData, setCardData] = useState<Props | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [noData, setNoData] = useState(true);
  const { cardId } = router.query;
  const menuOpen = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
  };
  const fetchOne = useCallback(async () => {
    setIsLoading(true);
    const data = await fetch("https://api.scryfall.com/symbology");
    const json = await data.json().then((res: SFManaRequest) => {
      return res;
    });
    if (typeof cardId !== "string") return;
    const response = await fetch(
      "https://api.scryfall.com/cards/named?fuzzy=" + cardId.replace(" ", "+")
    );
    const dataNew = await response.json().then((res: ScryfallRequest) => {
      res.mana_array = json != undefined ? json : { data: [] };
      return res;
    });
    setCardData({ cardData: dataNew });
    setIsLoading(false);
    setNoData(false);
    return;
  }, [cardId]);
  useEffect(() => {
    fetchOne();
  }, [fetchOne]);
  return (
    <React.Fragment>
      <NavbarWithList />
      <div className="App bg-gradient-to-br from-slate-200 to-slate-800 min-h-screen">
        {isLoading && (
          <div className="flex h-screen justify-center items-center">
            <MoonLoader color="#d4d4d4" />
          </div>
        )}
        {!isLoading && !noData && <Card {...cardData}></Card>}
      </div>
    </React.Fragment>
  );
};
export default RenderCard;
