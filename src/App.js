import { useState } from "react";
import phoneBookData from "./phonebook.json";

function App() {
  const [searchString, setSearchString] = useState("");

  return (
    <div>
      <h1>Telefonbuchsuche</h1>
      <input
        type="text"
        onChange={(e) => setSearchString(e.target.value)}
        placeholder="Max Mustermann"
      />
      <div>
        <SearchResult searchString={searchString} data={phoneBookData} />
      </div>
    </div>
  );
}

function SearchResult({ searchString, data }) {
  function reduceString(word) {
    return word.toLowerCase().replace(/[\s-]/g, "");
  }

  const reducedSearchString = reduceString(searchString);

  const searchResults = data.filter((e) => {
    const reducedName = reduceString(e.name);
    return reducedName.includes(reducedSearchString);
  });

  return (
    <>
      <h3>Suchergebnis für {searchString}</h3>
      <div>
        {searchResults.map((e) => (
          <PersonCard key={e.phone} name={e.name} phone={e.phone} />
        ))}
      </div>
    </>
  );
}

function PersonCard({ name, phone }) {
  return (
    <div>
      <p>{name}</p>
      <p>{phone}</p>
    </div>
  );
}

export default App;
