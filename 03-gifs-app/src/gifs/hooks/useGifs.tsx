import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermCliked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
    gifsCache.current[term] = gifs;
  };

 const handleSearch = async (query: string = "") => {
  query = query.trim().toLocaleLowerCase();

  if (query.length === 0) return;

  if (previousTerms.includes(query)) return;

  // ✅ Corregido: slice(0, 7) toma los primeros 7, más el nuevo = 8 total
  setPreviousTerms((prev) => [query, ...prev.slice(0, 7)]);

  const gifs = await getGifsByQuery(query);
  setGifs(gifs);

  gifsCache.current[query] = gifs; // ✅ Descomentar esta línea
};

  return {
    //Properties
    gifs,

    // Methods
    previousTerms,
    handleSearch,
    handleTermCliked,
  };
};

export default useGifs;
