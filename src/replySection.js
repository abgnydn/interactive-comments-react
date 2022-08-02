import { useState } from "react";
export default function ReplySection({ currentUser, visibility, id }) {
  const [reply, setReply] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <div className={visibility ? "block" : "hidden"} key={id}>
      <div className="flex flex-col ">
        <div className="flex flex-row ">
          <div className="flex rounded-xl p-6 bg-white my-3 w-full ">
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
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
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
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
        </div>
      </div>
    </div>
  );
}
