import GifList from "./gifs/components/GifList";
import PreviousSearch from './gifs/components/PreviousSearch';
import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from './shared/components/SearchBar';
import useGifts from "./gifs/hooks/useGifts";

export const GiftsApp = () => {

  const { handleSearch, previousTerms, habdleTermCliked, gifs } = useGifts();


  
  return (
    <>
      {/*Header */}
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gift perfecto" />


      {/*Search*/}
      <SearchBar placeholder="Buscar un Gift..." 
      onQuery={handleSearch}/>


      {/*Busquedas Previas*/}
      <PreviousSearch searches={previousTerms} onLabelClicked={habdleTermCliked} />
      

      {/*Gifs*/}
      <GifList gifs={gifs} />

      
    </>
  );
};

export default GiftsApp;
