import ScoreButton from "./scoreButton";
import ReplyButton from "./replyButton";
import DeleteButton from "./deleteButton";
export default function Replies({
  replies,
  handleDecrement,
  handleIncrement,
  handleReply,
  currentUser,
  handleOpen
}) {
  return (
    <div className="flex flex-col">
      {replies.map((reply) => (
        <div className="flex flex-row" key={reply.id}>
            <div className="block w-10 mr-12 border-r-2 h-100">
            </div>
          <div className="flex rounded-xl max-w-xl p-6 bg-white my-3">
            <ScoreButton
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              score={reply.score}
            />
            <div className="flex flex-col">
              <div className="flex flex-row place-content-between">
                <div className="flex flex-row">
                  <img
                    src={reply.user.image.webp}
                    className="w-10 h-10 rounded-full mr-3"
                    alt=""
                  ></img>
                  <p className="font-bold mr-3">{reply.user.username}</p>
                  {reply.user.username === currentUser.username && <div className="text-white bg-purple-500 px-2  rounded-sm h-2/3 mr-2 ">you</div>}
                  <div>
                    <p className="inline-block text-slate-400 font-semibold">
                      {reply.createdAt}
                    </p>
                  </div>
                </div>
                <div>
                  {reply.user.username === currentUser.username ?  <DeleteButton handleOpen={handleOpen}/> : <ReplyButton handleReply={handleReply} reply={reply} /> }
                </div>
              </div>

              <p className="text-slate-600">{reply.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
