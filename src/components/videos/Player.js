import YouTube from "react-youtube";
import { useNavigate } from "react-router-dom";

export default function Player({ videoId }) {
  const navigate = useNavigate();
  return <YouTube videoId={videoId} onError={() => navigate("/404")} />;
}
