export default function SearchBar({ setSearchBarFilter }) {
  return (
    <div className="search_bar_container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className="search_bar"
        type="text"
        placeholder="Recherche des articles"
        onChange={(event) => {
          setSearchBarFilter(event.target.value);
        }}
      />
    </div>
  );
}
