import ScoreButton from "./scoreButton";
import ReplyButton from "./replyButton";
export default function Replies ({replies,handleDecrement,handleIncrement,handleReply,handleDelete}) {
    return (
    <div className="grid justify-items-end">
    {replies.map((reply) => (
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

          <div>
            <p className="inline-block text-slate-400">
              {reply.createdAt}
            </p>
          </div>
        </div>
        <div>
            <ReplyButton handleReply={handleReply} reply={reply}/>
        </div>
      </div>

      <p className="text-slate-600">{reply.content}</p>
    </div>
    </div>

    ))}
    </div>
    )
}

