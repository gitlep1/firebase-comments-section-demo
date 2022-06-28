import VideoDescription from "./VideoDescription";
import "./SearchResults.css";

export default function SearchResults({ searchResults }) {
  return (
    <section className="searchResults">
      {searchResults.map((result) => (
        <VideoDescription
          key={result.id.videoId}
          snippet={result.snippet}
          id={result.id}
        />
      ))}
    </section>
  );
}
