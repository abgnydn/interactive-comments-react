import { useState } from "react";
import axios from 'axios';

export default function CommentForm({ currentUser, comments }) {
  const [comment, setComment] = useState("");
  const API_URL = 'http://localhost:3000/comments';
  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {

      content: comment,
      createdAt: "",
      score: 0,
      user: currentUser,
      replies: [],
    };

    axios
      .post(API_URL,  newComment )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      }).then.then(window.location.reload(false));
  };

  return (
    <div className="grid place-items-center">
      <div className="flex flex-row lg:w-3/5 md:w-2/3 sm:w-full p-6 bg-white rounded-xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-2 w-full">
          <img
            src={currentUser.image.png}
            className="rounded-full w-10 h-10 col-span-1"
            alt=""
          ></img>
          <textarea
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            cols="50"
            rows="4"
            className="col-span-8 border-slate-300 border rounded-sm p-3 resize-none"
          ></textarea>
          <button className="text-white bg-purple-500 font-bold rounded-lg mx-4 h-2/5 col-span-3">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
