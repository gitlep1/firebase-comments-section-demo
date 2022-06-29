import { useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

import useComments from "../hooks/useComments";

export default function CommentFeed({ videoId }) {
  const { comments, postComment } = useComments(videoId);
  const [commentDraft, setCommentDraft] = useState({
    author: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    postComment(commentDraft.author, commentDraft.comment);
    setCommentDraft({ author: "", comment: "" });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCommentDraft({ ...commentDraft, [name]: value });
  };

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
