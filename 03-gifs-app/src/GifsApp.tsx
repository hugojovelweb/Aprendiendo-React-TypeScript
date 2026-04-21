import GifList from "./gifs/components/GifList";
import PreviousSearch from "./gifs/components/PreviousSearch";
import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";
import useGifs from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { handleSearch, previousTerms, habdleTermCliked, gifs } = useGifs();

  return (
    <>
      {/*Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/*Search*/}
      <SearchBar placeholder="Buscar un Gif..." onQuery={handleSearch} />

      {/*Busquedas Previas*/}
      <PreviousSearch
        searches={previousTerms}
        onLabelClicked={habdleTermCliked}
      />

      {/*Gifs*/}
      <GifList gifs={gifs} />
    </>
  );
};

export default GifsApp;
