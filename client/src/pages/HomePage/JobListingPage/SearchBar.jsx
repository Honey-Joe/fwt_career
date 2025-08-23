import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChnage = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <input
        type="text"
        placeholder="Type job title..."
        value={query}
        onChange={handleChnage}
        onKeyDown={handleKeyDown}
        className="px-4 py-3 w-full rounded-full border focus:outline-none flex-1"
      />
      <button
        onClick={() => onSearch(query)}
        className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 "
      >
        Search Now
      </button>
    </div>
  );
};

export default SearchBar;
