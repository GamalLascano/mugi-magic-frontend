import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
export const CardContext = React.createContext({
  value: [] as string[],
  setValue: (card: string) => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [state, setState] = useState(["Ancestral Recall", "Black Lotus"]);
  const setCards = (card: string) => {
    setState((prevState) => [...prevState, card]);
  };
  const initState = {
    value: state,
    setValue: setCards,
  };
  return (
    <CardContext.Provider value={initState}>
      <Component {...pageProps} />
    </CardContext.Provider>
  );
}
