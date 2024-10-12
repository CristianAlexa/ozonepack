import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="text-center py-1">
      <div className="inline-flex items-center justify-center border border-slate-500  bg-slate-100 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          className="flex-1 outline-none bg-inherit"
          type="text"
          placeholder="Search"
        />

        <CiSearch className="w-4" />
      </div>
    </div>
  );
}
