import { useState } from "react";
import axios from 'axios';

export default function CommentForm({ currentUser, comments }) {
  const [comment, setComment] = useState("");
  const API_URL = 'http://localhost:3000/comments';
    const [id, setId] = useState(Object.keys(comments).length + 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: id,
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
      }).then(
        setId(id + 1)
      );
  };

  return (
    <div className="grid place-items-center">
      <div className="flex flex-row max-w-2xl p-6 bg-white rounded-xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-2">
          <img
            src={currentUser.image.png}
            className="rounded-full w-4 h-4 col-span-1"
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
