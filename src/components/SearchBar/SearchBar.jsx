import { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { OzoneContext } from "../../context/OzoneContext";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const { products, currency, setSearch } = useContext(OzoneContext);

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => setSearchValue(e.target.value);
  const handleViewAllClick = () => {
    setSearch(searchValue);
    setSearchValue("");
  };

  const applySearch = () => {
    let productsCopy = products.slice();

    productsCopy = productsCopy.filter((prod) =>
      prod.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchResults(searchValue && productsCopy);
  };

  useEffect(() => {
    applySearch();
  }, [searchValue]);

  return (
    <div className="text-center relative">
      <div
        className="inline-flex items-center justify-center border border-slate-500  bg-slate-100 px-5 py-2 my-6 
      mx-3 rounded-full w-3/4 sm:w-1/2"
      >
        <input
          className="flex-1 outline-none bg-inherit"
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => handleInputChange(e)}
        />

        <CiSearch className="w-4" />
      </div>
      <div className="absolute w-full left-0 flex justify-center z-10">
        <div className="flex flex-col gap-2 w-full sm:w-1/2 border bg-white border-slate-200 shadow-lg">
          {searchResults.length > 0 &&
            searchResults.slice(0, 3).map((prod, index) => (
              <Link key={index}>
                <div className="flex hover:bg-slate-50 gap-4 p-4">
                  <div className="w-1/3 sm:w-1/4 max-w-36">
                    <img
                      className="hover:shadow-lg hover:scale-105 transition ease-in-out"
                      src={prod.img}
                      alt={prod.sku}
                    />
                  </div>
                  <div className="text-left flex flex-col justify-between">
                    <div className="">
                      <p className="text-green-500 text-xs">{prod.sku}</p>
                      <h3 className="pt-3 pb-1 text-slate-700">{prod.name}</h3>
                      <span className="text-sm py-[2px] px-1 rounded border border-slate-200">
                        {prod.feature}
                      </span>
                    </div>

                    <p className="text-lg text-gray-700">
                      {currency}
                      {prod.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          {searchResults.length > 0 && (
            <div className="p-8 border-t">
              <Link
                to="/products"
                className="mt-8 text-sm px-6 py-2 bg-green-500 rounded-full text-center text-slate-100 hover:bg-green-300 transition duration-300"
                onClick={handleViewAllClick}
              >
                VIEW ALL
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
