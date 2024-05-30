import ContactCard from "./ContactCard";

export default function SearchResult({ searchString, data }) {
    const searchResults = filterDataBySearchString(searchString, data)
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
        {searchResults.length > 0 ? searchResults.map((e) => (
          <ContactCard key={e.phone} name={e.name} phone={e.phone} />
        )) : <p className="text-light-gray">Deine Suche ergab leider keine Treffer!</p>}
      </div>
    );
  }

  function filterDataBySearchString(searchString, data){
    function extractSingleWords(string){
      return string.toLowerCase().trim().split(/[\s-]/);
    }
  
    const searchStrings = extractSingleWords(searchString);
  
    return data.filter((e) => {
      const nameStrings = extractSingleWords(e.name);
  
      // as soon as there is no match for one searchstring it returns false
      for (let searchString of searchStrings) {
        let foundAMatch = false;
  
        for (let nameString of nameStrings) {
          if (nameString.startsWith(searchString)) {
            foundAMatch = true;
            break;
          }
        }
  
        if (!foundAMatch) return false;
      }
      return true;
    });
  }