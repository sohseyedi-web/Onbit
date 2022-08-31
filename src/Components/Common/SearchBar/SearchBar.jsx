import "./SearchBar.scss";
import { RiSearch2Line } from "react-icons/ri";
const SearchBar = ({ search, setSearch }) => {
  return (
    <form className="form" dir="ltr">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search ..."
      />
      <span>
        <RiSearch2Line size={32} />
      </span>
    </form>
  );
};

export default SearchBar;
