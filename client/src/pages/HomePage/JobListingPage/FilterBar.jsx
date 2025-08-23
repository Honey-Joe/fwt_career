const FilterBar = ({ filters, setFilters, clearFilters }) => {
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <select
        onChange={(e) => updateFilter("department", e.target.value)}
        className="border px-3 py-2 rounded focus:outline-none"
        value={filters.department || ""}
      >
        <option value="">Departments</option>
        <option value="Opensource">Opensource</option>
        <option value="MEAN">MEAN</option>
      </select>

      <select
        onChange={(e) => updateFilter("location", e.target.value)}
        className="border px-3 py-2 rounded focus:outline-none"
        value={filters.location || ""}
      >
        <option value="">Locations</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Kochi">Kochi</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
      </select>

      <select
        onChange={(e) => updateFilter("type", e.target.value)}
        className="border px-3 py-2 rounded outline-none"
        value={filters.type || ""}
      >
        <option value="">Job Type</option>
        <option value="Full Time">Full Time</option>
      </select>

      <select
        onChange={(e) => updateFilter("experience", e.target.value)}
        className="border px-3 py-2 rounded outline-none"
        value={filters.experience || ""}
      >
        <option value="">Experience</option>
        <option value="8 to 12 years">8 to 12 years</option>
        <option value="11 to 17 years">11 to 17 years</option>
      </select>

      <button
        onClick={clearFilters}
        className="bg-red-500 text-white px-4 py-2 rounded overscroll-none"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterBar;
