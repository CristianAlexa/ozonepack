import { useContext, useEffect, useState } from "react";
import { OzoneContext } from "../context/OzoneContext";

const FilterItem = ({ name, handleItemClick }) => {
  const { allFilters } = useContext(OzoneContext);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(allFilters.includes(name));
  }, [allFilters]);

  return (
    <div className="flex gap-2 items-center py-1">
      <input
        name={name}
        type="checkbox"
        onChange={handleItemClick}
        checked={isChecked}
      />
      <p>{name}</p>
    </div>
  );
};

export default FilterItem;
