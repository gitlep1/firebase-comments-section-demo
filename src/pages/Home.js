import { useState } from "react";
import { SearchBar, SearchResults } from "../components/videos";

const formatURL = (query) => {
  const baseURL = "https://www.googleapis.com/youtube/v3/search";
  const params = `key=${process.env.REACT_APP_API_KEY}&q=${query}&maxResults=10&part=snippet&type=video`;
  return `${baseURL}?${params}`;
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchVideos = (event) => {
    event.preventDefault();
    fetch(formatURL(query))
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data.items);
      })
      .catch((error) => console.warn(error));
  };

  const updateQuery = (event) => {
    setQuery(event.target.value);
  };

  return (
    <main className="App-main">
      <SearchBar
        query={query}
        handleChange={updateQuery}
        handleSubmit={fetchVideos}
      />
      {searchResults.length ? (
        <SearchResults searchResults={searchResults} />
      ) : (
        <p>No Search Results</p>
      )}
    </main>
  );
}
