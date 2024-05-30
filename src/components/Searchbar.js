import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Searchbar({ handleOnChange }) {
  return (
    <div className="flex items-center shadow rounded-md bg-white md:shadow-md py-2 px-3 gap-2">
      <MagnifyingGlassIcon className="h-5 w-5 text-light-gray" />
      <input
        className="grow text-dark-gray focus:outline-none"
        type="text"
        onChange={handleOnChange}
        placeholder="In Kontakten suchen"
      />
    </div>
  );
}