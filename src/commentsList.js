import Replies from "./replies";
import ScoreButton from "./components/scoreButton";
import ReplyButton from "./components/replyButton";
export default function CommentsList({
  comments,
  handleIncrement,
  handleDecrement,
  handleReply,
  currentUser,
  handleOpen
}) {
  return (
    <div className="grid place-items-center py-20">
      {comments.map((comment) => (
        <div key={comment.id}>
          <div className="flex rounded-xl max-w-2xl p-6 bg-white my-3 min-w-2xl">
            <ScoreButton
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              score={comment.score}
            />
            <div className="flex flex-col">
              <div className="flex flex-row place-content-between">
                <div className="flex flex-row">
                  <img
                    src="./images/avatars/image-amyrobson.png"
                    className="w-10 h-10 rounded-full mr-3"
                    alt=""
                  ></img>
                  <p className="font-bold mr-3">{comment.user.username}</p>

                  <div>
                    <p className="inline-block text-slate-400">
                      {comment.createdAt}
                    </p>
                  </div>
                </div>
                <div>
                    <ReplyButton handleReply={handleReply}/>
                </div>
              </div>

              <p className="text-slate-600">{comment.content}</p>
            </div>
          </div>
          {comment.reply !== null && (
            <div>
              <Replies
                replies={comment.replies}
                handleIncrement={handleIncrement}
                handleReply={handleReply}
                currentUser={currentUser}
                handleOpen={handleOpen}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
