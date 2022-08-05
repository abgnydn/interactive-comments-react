import {  useState } from "react";
export default function ReplySection({
  currentUser,
  visibility,
  id,
  replySection,
  comment,
  reply
}) {

  const userName = `@${replySection ? reply.user.username : comment.user.username}`;
  const [newReply, setNewReply] = useState(userName);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    e.preventDefault();
    setNewReply(e.target.value);
  };
  return (
    <div className={visibility ? "block" : "hidden"} key={id}>
      <div className="flex p-0 m-0 bg-transparent flex-initial w-full">
        {replySection && (
          <div className="block w-10 mr-12 border-r-2 h-100"></div>
        )}
        <div className="flex rounded-xl p-6 bg-white my-3 w-full ">
          <div className="flex flex-row w-full">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-12 gap-2 w-full"
            >
              <img
                src={currentUser.image.webp}
                className="w-10 h-10 rounded-full mr-3 col-span-1"
                alt=""
              ></img>
              <textarea
                required
                value={newReply}
                onChange={handleChange}
                placeholder="Add a comment..."
                cols="50"
                rows="4"
                className="col-span-8 border-slate-300 border rounded-sm p-3 resize-none"
              ></textarea>
              <button className="text-white bg-purple-500 font-bold rounded-lg h-2/5 col-span-3 mx-3">
                REPLY
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
