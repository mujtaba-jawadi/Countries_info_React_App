export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleSearchInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortedCountries = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });

    setCountries(sortedCountries)
  };

  return (
    <section className="search-filter-section container">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchInputChange}
      />
      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div>
        <button onClick={() => sortCountries("asc")}>Ascend</button>
        <button onClick={() => sortCountries("des")}>Descend</button>
      </div>
    </section>
  );
};
