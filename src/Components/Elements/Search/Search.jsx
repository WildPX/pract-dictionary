import { FaSearch } from "react-icons/fa";
import { useDictionary } from "../../../DictionaryContext";
import { useState } from "react";

function Search() {
  const { fetchData } = useDictionary();
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => fetchData(query)}>
        <FaSearch />
      </button>
    </div>
  );
}
export default Search;
