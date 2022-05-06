export default function SearchBar({ setSerchBarFilter }) {
  <div className="search_container">
    <i className="fa-solid fa-magnifying-glass"></i>
    <input
      className="search_bar"
      type="text"
      placeholder="Recherche des articles"
      onChange={(event) => {
        setSerchBarFilter(event.target.value);
      }}
    />
  </div>;
}
