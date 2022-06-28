import { useState, useEffect } from "react";
import { SearchBar, SearchResults } from "../components/videos";

export default function Home() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchVideos = (event) => {
    event.preventDefault();
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBBEArmjLSYnqJHb-YRZPl-XQnEgVLoe5c&maxResults=10&part=snippet&type=video&q=${query}`
    )
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
