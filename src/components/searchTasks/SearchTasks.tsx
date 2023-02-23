import { useDispatch } from "react-redux";
import { setFilterValue, setSearchValue } from "../../redux/slices/tasks";
import css from "./SearchTasks.module.scss";

const SearchTasks = () => {
  const dispatch = useDispatch();

  const handleSearch = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    dispatch(setSearchValue(value));
  };

  const handleFilter = (e: { target: HTMLSelectElement }) => {
    const { value } = e.target;
    dispatch(setFilterValue(value));
  };

  return (
    <div className={css.searchContainer}>
      <input
        className="custom-input"
        onChange={handleSearch}
        placeholder="search..."
      />
      <select className="custom-select" onChange={handleFilter}>
        <option value={0}>All</option>
        <option value={1}>Completed</option>
        <option value={2}>Pending</option>
      </select>
    </div>
  );
};

export default SearchTasks;
