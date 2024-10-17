import { useEffect, useState } from "react";

//icons
import { IoIosArrowDown } from "react-icons/io";
import FilterItem from "../FilterBlock/FilterItem";

const FilterBlock = ({ itemList, title, setFilteredItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterArr, setFilterArr] = useState([]);

  const handleTitleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (e) => {
    const { id, name, type, checked } = e.target;
    filterArr.includes(id)
      ? setFilterArr((prev) => prev.filter((el) => el !== id))
      : setFilterArr((prev) => [...prev, id]);
  };

  useEffect(() => {
    setFilteredItems(filterArr);
  }, [filterArr]);

  return (
    <section className="w-full">
      <div
        onClick={handleTitleClick}
        className="flex justify-between items-center px-2 py-1 bg-slate-100 cursor-pointer"
      >
        <span>{title}</span>
        <span className={isOpen ? "rotate-180 transition duration-150" : ""}>
          <IoIosArrowDown />
        </span>
      </div>
      <div
        className={`px-2 border border-slate-100 transition-all duration-300 ease-in-out ${
          isOpen ? "h-auto max-h-[9999px]" : "max-h-0 overflow-hidden"
        }`}
      >
        {itemList.map((item, index) => (
          <FilterItem
            key={index}
            name={item}
            handleItemClick={handleItemClick}
            className="flex gap-2 items-center py-1"
          />
        ))}
      </div>
    </section>
  );
};

export default FilterBlock;
