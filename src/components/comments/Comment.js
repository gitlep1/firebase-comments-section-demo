export default function Comment({ comment }) {
  return (
    <div>
      <p>
        {comment.author}: {comment.comment}
      </p>
    </div>
  );
}
