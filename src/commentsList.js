
import Comment from "./comment";

export default function CommentsList({ comments, currentUser}) {

  return (
    <div>
      <div className="grid place-items-center">
        <div className="flex lg:w-3/5 flex-col md:w-2/3 sm:w-full shrink-0">
          {comments.map((comment) => (
            <div key={comment.id}>
             <Comment  comment={comment} currentUser={currentUser}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
