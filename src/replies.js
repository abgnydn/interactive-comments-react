import Reply from "./reply";
export default function Replies({
  replies,
  handleDecrement,
  handleIncrement,
  handleReply,
  currentUser,
  handleOpen,
  replySectionVisibility,
  comment
}) {
  return (
    <div className="flex flex-col">
      {replies.map((reply) => (
        <div className="flex flex-col" key={reply.id}>
            <Reply reply={reply} comment={comment} handleDecrement={handleDecrement} handleIncrement={handleIncrement} handleReply={handleReply} currentUser={currentUser} handleOpen={handleOpen} replySectionVisibility={replySectionVisibility}/>
            
        </div>
      ))}
    </div>
  );
}
