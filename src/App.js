import { useState } from "react";
import "./index.css";
import phoneBookData from "./phonebook.json";

function App() {
  const [searchString, setSearchString] = useState("");

  return (
<>
    <div className="p-4 pt-6 bg-blue">
    <h1 className="text-xl font-bold text-gray">Dein mobiles Telefonbuch</h1>
    </div>
    <div className="p-4 pt-8 lg:container mx-auto flex flex-col">


      <input
      className="shadow border rounded py-2 px-3 text-gray-700 focus:outline-none"
        type="text"
        onChange={(e) => setSearchString(e.target.value)}
        placeholder="Max Mustermann"
      />
      <div className="pt-4">
        <SearchResult  searchString={searchString} data={phoneBookData} />
      </div>
    </div></>
  );
}

function SearchResult({ searchString, data}) {
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
      <div>
        {searchResults.map((e) => (
          <div className="pt-4">
          <PersonCard key={e.phone} name={e.name} phone={e.phone} />
          </div>
        ))}
      </div>
    </>
  );
}

function PersonCard({ name, phone }) {
  return (
    <div>
      <p>{name}</p>
      <p>Tel. {phone}</p>
    </div>
  );
}

export default App;
