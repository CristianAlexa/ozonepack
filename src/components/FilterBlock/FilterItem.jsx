const FilterItem = ({ name, handleItemClick }) => {
  return (
    <div className="flex gap-2 items-center py-1">
      <input name={name} type="checkbox" onChange={handleItemClick} />
      <p>{name}</p>
    </div>
  );
};

export default FilterItem;
