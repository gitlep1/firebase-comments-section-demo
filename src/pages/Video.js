import { Player } from "../components/videos";
import { CommentForm, CommentFeed } from "../components/comments";
import { useParams } from "react-router-dom";

export default function Video() {
  const { videoId } = useParams();

  return (
    <main className="App-main">
      <Player videoId={videoId} />
      <CommentFeed videoId={videoId} />
    </main>
  );
}
