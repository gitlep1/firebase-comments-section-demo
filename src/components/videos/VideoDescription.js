import { Link } from "react-router-dom";
import "./VideoDescription.css";

export default function VideoDescription({ snippet, id }) {
  return (
    <Link to={`/video/${id.videoId}`}>
      <article className="videoDescription">
        <img src={snippet.thumbnails.default.url} alt={snippet.title} />
        <h6>{snippet.title}</h6>
        <p>{snippet.description}</p>
      </article>
    </Link>
  );
}
