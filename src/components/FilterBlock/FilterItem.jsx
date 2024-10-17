const FilterItem = ({ name, handleItemClick }) => {
  return (
    <div className="flex gap-2 items-center py-1">
      <input id={name} type="checkbox" onChange={handleItemClick} />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export default FilterItem;
