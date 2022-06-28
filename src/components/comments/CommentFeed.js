import { useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

export default function CommentFeed({ videoId }) {
  const [comments, setComments] = useState([]);
  const [commentDraft, setCommentDraft] = useState({
    author: "",
    comment: "",
  });

  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <section>
      <CommentForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        comment={commentDraft.comment}
        author={commentDraft.author}
      />

      {comments.map((comment, idx) => (
        <Comment key={idx} comment={comment} />
      ))}
    </section>
  );
}
