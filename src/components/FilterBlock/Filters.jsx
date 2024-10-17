import { useContext, useEffect, useState } from "react";

//context
import { OzoneContext } from "../../context/OzoneContext";

//components
import FilterBlock from "./FilterBlock";

const Filters = () => {
  const { products, categories, features } = useContext(OzoneContext);
  const {
    setFilteredCateg,

    setFilteredFeatures,
  } = useContext(OzoneContext);

  return (
    <div className="flex flex-col gap-4 min-w-60 mb-8">
      <div className="w-full border-b border-slate-700">
        <p className="text-lg archivo pb-2">FILTERS</p>
        {/* <ul className="flex flex-wrap gap-2 mb-4">
          {allFilters.map((item, index) => (
            <li
              key={index}
              id={item}
              className="flex gap-1 items-center py-1 px-2 rounded bg-slate-100"
            >
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul> */}
      </div>

      <FilterBlock
        itemList={categories}
        title={"Categories"}
        setFilteredItems={setFilteredCateg}
      />
      <FilterBlock
        itemList={features}
        title={"Features"}
        setFilteredItems={setFilteredFeatures}
      />
    </div>
  );
};

export default Filters;
