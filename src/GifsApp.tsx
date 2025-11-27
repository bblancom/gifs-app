import { CustomHeader } from './shared/components/CustomHeader';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { SearchBar } from './shared/components/SearchBar';
import { GifList } from './gifs/components/GifList';
import { useGif } from './gifs/hooks/useGif';

export const GifsApp = () => {
     const { gifs, previousTerms , handleSearch, handleTermClicked} = useGif();

     return (
          <>
               <CustomHeader
                    title="Gifs search"
                    description="Discover and share the perfect gif"
               />

               <SearchBar
                    placeholder="Search whatever you want"
                    onQuery={handleSearch}
               />

               <PreviousSearches
                    searches={previousTerms}
                    onLabelClicked={handleTermClicked}
               />

               <GifList gifs={gifs} />
          </>
     );
};
