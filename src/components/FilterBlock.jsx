import { IoIosArrowDown } from "react-icons/io";

const FilterBlock = ({ itemList, title }) => {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center px-2 py-1 bg-slate-100">
        <span>{title}</span>
        <span className="cursor-pointer">
          <IoIosArrowDown />
        </span>
      </div>
      <div className="p-2 border border-slate-100">
        {itemList.map((item, index) => (
          <div key={index} className="flex gap-2 items-center py-1">
            <input name={item} type="checkbox" value={item} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilterBlock;
