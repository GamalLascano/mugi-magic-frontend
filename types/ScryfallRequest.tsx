type ScryfallRequest = {
  object: string;
  id: string;
  oracle_id: string;
  multiverse_ids: number[];
  mtgo_id: number;
  tcgplayer_id: number;
  cardmarket_id: number;
  name: string;
  lang: string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  image_uris: {
    normal: string;
    png: string;
  };
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;
  colors: string[];
  color_identity: string[];
  keywords: string[];
  set_name: string;
  flavor_text: string;
  prices: {
    usd: string;
    usd_foil: string;
    usd_etched: null;
    eur: string;
    eur_foil: string;
  };
};
export default ScryfallRequest;
