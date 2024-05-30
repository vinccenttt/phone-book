import { useState } from "react";
import "./index.css";
import phoneBookData from "./phonebook.json";
import { PhoneArrowUpRightIcon as PhoneIconOutline } from "@heroicons/react/24/outline";
import { PhoneArrowUpRightIcon as PhoneIconSolid } from "@heroicons/react/24/solid";

function App() {
  const [searchString, setSearchString] = useState("");

  return (
    <div className="bg-off-white">
      <Header />
      <div className="lg:container xl:px-40 lg:px-16 sm:px-12 px-8 pt-8 flex flex-col gap-6">
        <Searchbar handleOnChange={(e) => setSearchString(e.target.value)}/>
        <SearchResult searchString={searchString} data={phoneBookData} />
      </div>
      <ShowScreenSize />
    </div>
  );
}

function Header() {
  return (
    <div className="sm:pt-6 p-4 bg-dark-blue">
      <h1 className="text-xl font-bold text-off-white hidden sm:block">
        Dein mobiles
      </h1>
      <h1 className="sm:text-5xl text-xl font-bold text-off-white">
        Telefonbuch
      </h1>
    </div>
  );
}

function Searchbar({handleOnChange}) {
  return (
    <input
      className="md:shadow-md shadow rounded-md py-2 px-3 text-dark-gray focus:outline-none"
      type="text"
      onChange={handleOnChange}
      placeholder="In Kontakten suchen"
    />
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
      {searchResults.map((e) => (
        <PersonCard key={e.phone} name={e.name} phone={e.phone} />
      ))}
    </div>
  );
}

function PersonCard({ name, phone }) {
  const [isHovered, setIsHovered] = useState(false);
  const foregroundColor = isHovered ? "dark-blue" : "dark-gray";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center justify-between w-full p-6 rounded-md bg-off-white md:shadow-md shadow border border-off-white hover:border-[#00254E]"
    >
      <div>
        <p className={`font-bold text-base mb-1 text-${foregroundColor}`}>
          {name}
        </p>
        <p className={`text-sm text-${foregroundColor}`}>Tel. {phone}</p>
      </div>
      <PhoneIcon isHovered={isHovered} color={foregroundColor} />
    </div>
  );
}

function PhoneIcon({ isHovered, color }) {
  const translation = isHovered ? "transform -translate-y-1 translate-x-1" : "";
  const styling = `h-6 w-6 text-${color} ${translation}`;
  return isHovered ? (
    <PhoneIconSolid className={styling} />
  ) : (
    <PhoneIconOutline className={styling} />
  );
}

function ShowScreenSize() {
  return (
    <div className="flex items-center m-2 fixed bottom-0 right-0 border border-gray-400 rounded p-2 bg-gray-300 text-pink-600 text-sm">
      <svg
        class="h-6 w-auto inline"
        viewBox="0 0 80 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#paint0_linear)"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M32 16C24.8 16 20.3 19.6 18.5 26.8C21.2 23.2 24.35 21.85 27.95 22.75C30.004 23.2635 31.4721 24.7536 33.0971 26.4031C35.7443 29.0901 38.8081 32.2 45.5 32.2C52.7 32.2 57.2 28.6 59 21.4C56.3 25 53.15 26.35 49.55 25.45C47.496 24.9365 46.0279 23.4464 44.4029 21.7969C41.7557 19.1099 38.6919 16 32 16ZM18.5 32.2C11.3 32.2 6.8 35.8 5 43C7.7 39.4 10.85 38.05 14.45 38.95C16.504 39.4635 17.9721 40.9536 19.5971 42.6031C22.2443 45.2901 25.3081 48.4 32 48.4C39.2 48.4 43.7 44.8 45.5 37.6C42.8 41.2 39.65 42.55 36.05 41.65C33.996 41.1365 32.5279 39.6464 30.9029 37.9969C28.2557 35.3099 25.1919 32.2 18.5 32.2Z"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="3.5"
            y1="16"
            x2="59"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2298BD"></stop>
            <stop offset="1" stop-color="#0ED7B5"></stop>
          </linearGradient>
        </defs>
      </svg>
      Current breakpoint
      <span class="ml-1 sm:hidden md:hidden lg:hidden xl:hidden">
        default (&lt; 640px)
      </span>
      <span class="ml-1 hidden sm:inline md:hidden font-extrabold">sm</span>
      <span class="ml-1 hidden md:inline lg:hidden font-extrabold">md</span>
      <span class="ml-1 hidden lg:inline xl:hidden font-extrabold">lg</span>
      <span class="ml-1 hidden xl:inline font-extrabold">xl</span>
    </div>
  );
}

export default App;
