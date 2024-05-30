import { useState } from "react";
import "./index.css";
import phoneBookData from "./phonebook.json";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import SearchResult from "./components/SearchResult";

function App() {
  const [searchString, setSearchString] = useState("");

  return (
    <div className="bg-off-white">
      <Header/>
      <div className="lg:container xl:px-40 lg:px-16 sm:px-12 px-8 pt-8 flex flex-col gap-6">
        <Searchbar handleOnChange={(e) => setSearchString(e.target.value)} />
        <SearchResult searchString={searchString} data={phoneBookData} />
      </div>
    </div>
  );
}







export default App;
