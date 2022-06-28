import { useComments } from "../../hooks";
import { useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

export default function CommentFeed({ videoId }) {
  const [commentDraft, setCommentDraft] = useState({
    author: "",
    comment: "",
  });
  const [comments, postComment] = useComments(videoId);
  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(commentDraft.author, commentDraft.comment);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCommentDraft({ ...commentDraft, [name]: value });
  };

  return (
    <section>
      {commentDraft && (
        <CommentForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          comment={commentDraft.comment}
          author={commentDraft.author}
        />
      )}
      {comments.map((comment, idx) => (
        <Comment key={idx} comment={comment} />
      ))}
    </section>
  );
}
