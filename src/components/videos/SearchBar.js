export default function SearchBar({ query, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        id="query"
        placeholder="Search for a video..."
        value={query}
        onChange={handleChange}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
