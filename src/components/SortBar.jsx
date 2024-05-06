const SortBar = ({ onSort1, onFilterData }) => {
  return (
    <div className="sort-bar">
      <select onChange={onSort1}>
        <option value="health">Sort by Health</option>
        <option value="damage">Sort by Damage</option>
        <option value="armor">Sort by Armor</option>
      </select>
     
    </div>
  );
};

export default SortBar;
