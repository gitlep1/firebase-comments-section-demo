export default function CommentForm({
  handleChange,
  handleSubmit,
  comment,
  author,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="author"
        id="author"
        value={author}
        onChange={handleChange}
      />
      <input
        type="text"
        name="comment"
        id="comment"
        value={comment}
        onChange={handleChange}
      />
      <input type="submit" value="post comment" />
    </form>
  );
}
